const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const cheerio = require('cheerio')
const axios = require('axios');



const getJobs = async () => {

    const jobTitles = [];
	try {
        sleep(2000); // wait for 2 seconds so we don't get blocked by website's firewall
		const { data } = await axios.get(
			'https://jobs.vancouver.ca/search/?createNewAlert=false&q='
		);
		const $ = cheerio.load(data);
		const postTitles = [];

		$('tr.data-row > td.colTitle > span.jobTitle > a.jobTitle-link').each((_idx, el) => {
			const postTitle = $(el).text()
			postTitles.push(postTitle)
		});

		return postTitles;
	} catch (error) {
		throw error;
	}
};

getJobs().then((postTitles) => console.log(postTitles))


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }