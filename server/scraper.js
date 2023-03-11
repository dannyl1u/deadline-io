// const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const cheerio = require('cheerio')
const axios = require('axios');
const { post } = require('request');

const getJobs = async () => {

    const jobTitles = [];
	try {
        sleep(2000); // wait for 2 seconds so we don't get blocked by website's firewall
		const { data } = await axios.get(
			'https://jobs.vancouver.ca/search/?createNewAlert=false&q='
		);
		const $ = cheerio.load(data);
		const jobTitles = [];
        const postingDates = [];

		$('tr.data-row > td.colTitle > span.jobTitle > a.jobTitle-link').each((_idx, el) => {
			const jobTitle = $(el).text()
			jobTitles.push(jobTitle)
		});

        $('tr.data-row > td.colDate > span.jobDate').each((_idx, el) => {
			const scrapedPostingDate = $(el).text()
            const postingDate = scrapedPostingDate.replace(/[\n\t]/g, "")
			postingDates.push(postingDate)
		});
        
        var jobs_dict = {};
        for (let i = 0; i < jobTitles.length && i < postingDates.length; i++) {
            jobs_dict[jobTitles[i]] = postingDates[i];
        }
		return jobs_dict;

	} catch (error) {
		throw error;
	}
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
