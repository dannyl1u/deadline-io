// const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const cheerio = require('cheerio')
const axios = require('axios');
const { post } = require('request');
const cron = require('node-cron');

let jobTitles = [];
let postingDates = [];
let jobs_dict = {};

// Cron job to scrape the website every 30 seconds

const getJobs = async () => {
	cron.schedule('*/5 * * * * *', async () => {
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

getJobs().then((jobs_dict) => console.log(jobs_dict))

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

module.exports = { getJobs };
