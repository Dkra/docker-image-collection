const puppeteer = require('puppeteer')
const app = async () => {
	const browser = await puppeteer.launch({
		headless: true,
		executablePath: process.env.CHROME_BIN || null,
		args: [
			'--no-sandbox',
			'--headless',
			'--disable-gpu',
			'--disable-dev-shm-usage'
		]
	})

	await setTimeout(() => browser.close(), 3000)
}

app()
