# n-topic-card

n-topic-card is a card that shows a list of articles for a concept (topic, author, etc.) with links to myFT actions

## Install

Add the component to bower.json and package.json

Run `npm install n-topic-card --save && bower install n-topic-card --save`

Add the following line to your main sass file: `@import "n-topic-card/main";`

## Usage

Server-side
```html
	{{> n-topic-card/templates/concept }}
```

Client-side
```javascript
const myftTemplate = require('../../../views/partials/myft.html');
const myFtHtml = myftTemplate(data);
```

n-topic-card requires at least the following data:
* `url` - url for the concept stream page
* `name` - name of the concept e.g. World
* `conceptId`
* `items` an array of objects that are the headlines to show

Please view the source for more information.

## Extra data

`responsive-grids` handles scenarios where you want particular cards to be hidden at certain breakpoints. For example, on the home page only 3 myFT concept cards are shown between the medium and large breakpoints.  This decorator requires the data item `show` with the settings in an object e.g. `{ default: true, M: false, XL: true }`

The decorator finds an image from the list of articles to be displayed, and if it cannot find one uses a default.

##Demo page
`$ make demo`: Serves examples of the component locally (`http://localhost:5005`), using dummy data and in isolation from an app.

This is done on a simple express app which renders a single demo page that calls the partials to exhibit, populating them with data from a fixture.

##Pa11y
`$ make a11y`: Serves page of demo components, on which it runs [Pa11y](http://pa11y.org/) accessibility tests (errors flagging up accessibility infringements), which will also be run as part of the Continuous Integration (CI) process.
