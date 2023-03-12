// const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const cheerio = require('cheerio')
const axios = require('axios');
const { post } = require('request');
const cron = require('node-cron');

let jobTitles = [];
let postingDates = [];
let jobs_dict = {};

let bcit_jobs_dict = {};
let bcitJobTitles = [];
let bcitPostingDates = [];

const getJobs = async () => {
	try {
		const { data } = await axios.get('https://careers.bcit.ca/postings/search?utf8=%E2%9C%93&query=&query_v0_posted_at_date=&1416%5B%5D=any&1763%5B%5D=any&commit=Search');
	
		const $ = cheerio.load(data);
			
		$('#search_results > div.job-item > div.container-fluid > div.row > div.job-title').each((_idx, el) => {
			const scrapedBcitJobTitle = $(el).text()
			const bcitJobTitle = scrapedBcitJobTitle.replace(/^\s+/, "").trim()
			bcitJobTitles.push("❗" + bcitJobTitle)
		});

		const dates = $('#search_results > div.job-item > div.container-fluid > div.row > div.col-md-8').find("div");

		var i = 1;
		dates.each((_idx, el) => {
			const scrapedBcitJobPostingDate = $(el).text();
			const bcitPostingDate = scrapedBcitJobPostingDate.trim();
			if (i % 5 == 0) {
				bcitPostingDates.push(bcitPostingDate);
				console.log("date: " + bcitPostingDate);
			}
			i+=1;
		});
		
		for (let i = 0; i < bcitPostingDates.length && i < bcitJobTitles.length; i++) {
			bcit_jobs_dict[bcitJobTitles[i]] = bcitPostingDates[i];
		}
		return bcit_jobs_dict;
	
	} catch (error) {
		throw error;
	}
}
getJobs().then((bcit_jobs_dict) => console.log(bcit_jobs_dict))

const getVancityJobs = async () => {
	// Cron job to scrape the website every hour
	cron.schedule('0 * * * *', async () => {
		try {
			console.log("inside cron job")
			// sleep(2000); // wait for 2 seconds so we don't get blocked by website's firewall
			const { data } = await axios.get(
				'https://jobs.vancouver.ca/search/?createNewAlert=false&q='
			);
			const $ = cheerio.load(data);
			
			$('tr.data-row > td.colTitle > span.jobTitle > a.jobTitle-link').each((_idx, el) => {
				const jobTitle = $(el).text()
				jobTitles.push(jobTitle)
			});
	
			$('tr.data-row > td.colDate > span.jobDate').each((_idx, el) => {
				const scrapedPostingDate = $(el).text()
				const postingDate = scrapedPostingDate.replace(/[\n\t]/g, "")
				postingDates.push(postingDate)
			});
			
			for (let i = 0; i < jobTitles.length && i < postingDates.length; i++) {
				jobs_dict[jobTitles[i]] = postingDates[i];
			}
			console.log(jobs_dict)
	
		} catch (error) {
			throw error;
		}
	  }).start();
	
	return jobs_dict;	
};

getVancityJobs().then((jobs_dict) => console.log(jobs_dict))

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

module.exports = { getJobs };

