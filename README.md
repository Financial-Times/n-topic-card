# n-concept

n-concept is a card that shows a list of articles for a concept (topic, author, etc.) with links to myFT actions

## Install

Add the component to bower.json and package.json

Run `npm install n-concept --save && bower install n-concept --save`

Add the following line to your main sass file: `@import "n-concept/main";`

## Usage

Server-side
```html
	{{> n-concept/templates/concept }}
```

Client-side
```javascript
const myftTemplate = require('../../../views/partials/myft.html');
const myFtHtml = myftTemplate(data);
```

n-concept requires at least the following data:
 * `url` - url for the concept stream page
 * `name` - name of the concept e.g. World
 * `taxonomy` - what type of concept (e.g. author, topic)
 * `conceptId`
 * `items` an array of objects that are the headlines to show
 * `imageUrl` for the image that appears at the top. You don't have to use the presenter to do this, but you will probably want to

Please view the source for more information.

## Extra data

n-concept comes with 3 decorators

`concept` combines the 2 decorators below

`responsive-grids` handles scenarios where you want particular cards to be hidden at certain breakpoints. For example, on the home page only 3 myFT concept cards are shown between the medium and large breakpoints.  This decorator requires the data item `show` with the settings in an object e.g. `{ default: true, M: false, XL: true }`

`concept-image` retrieves the image for the concept card. It requires the name of the taxonomy for the concept, and the list of articles in an array of objects called `items`, which should be in your data anyway.

The decorator finds an image from the list of articles to be displayed, and if it cannot find one uses a default.

##Demo page
`$ make demo`: Serves examples of the component locally (`http://localhost:5005`), using dummy data and in isolation from an app.

This is done on a simple express app which renders a single demo page that calls the partials to exhibit, populating them with data from a fixture.

##Pa11y
`$ make a11y`: Serves page of demo components, on which it runs [Pa11y](http://pa11y.org/) accessibility tests (errors flagging up accessibility infringements), which will also be run as part of the Continuous Integration (CI) process.
