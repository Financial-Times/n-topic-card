'use strict';

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const handlebars = require('handlebars');
const nExpress = require('@financial-times/n-express');
const { PageKitHandlebars, helpers } = require('@financial-times/dotcom-server-handlebars');

const fixtures = require('./fixtures.json');

const errorHighlight = chalk.bold.red;
const highlight = chalk.bold.green;

const app = module.exports = nExpress({
	name: 'public',
	systemCode: 'n-topic-card-demo',
	withFlags: false,
	withConsent: false,
	withServiceMetrics: false,
	withAnonMiddleware: false,
	demo: true,
	withBackendAuthentication: false,
});

const templateDirectory = path.join(__dirname, '../templates');

fs.readdirSync(templateDirectory).forEach(filename => {
	handlebars.registerPartial(
		`n-topic-card/templates/${filename.substr(0, filename.lastIndexOf('.'))}`,
		fs.readFileSync(path.join(templateDirectory, filename), 'utf8')
	);
});

app.set('views', __dirname);
app.set('view engine', '.html');

app.engine('.html', new PageKitHandlebars({
	cache: false,
	handlebars,
	helpers: {
		...helpers,
		concept: require('../handlebars-helpers/concept'),
	}
}).engine);

app.use('/public', nExpress.static(path.join(__dirname, '../public'), { redirect: false }));

app.get('/', (_, res) => {
	res.render('index', fixtures);
});

function runPa11yTests () {
	const spawn = require('child_process').spawn;
	const pa11y = spawn('pa11y-ci');

	pa11y.stdout.on('data', (data) => {
		console.log(highlight(`${data}`)); //eslint-disable-line
	});

	pa11y.stderr.on('data', (error) => {
		console.log(errorHighlight(`${error}`)); //eslint-disable-line
	});

	pa11y.on('close', (code) => {
		process.exit(code);
	});
}

const listen = app.listen(5005);

if (process.env.PA11Y === 'true') {
	listen.then(runPa11yTests);
}
