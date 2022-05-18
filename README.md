# n-topic-card [![CircleCI](https://circleci.com/gh/Financial-Times/n-topic-card.svg?style=svg)](https://circleci.com/gh/Financial-Times/n-topic-card)

`n-topic-card` is a card that shows a list of articles for a concept (topic, author, etc.) with links to myFT actions.

## Install

Add the component to package.json.

Run `npm install n-topic-card --save`.

Add the following line to your main sass file: `@import "n-topic-card/main";`.

## Usage

### Server-side

```html
{{> n-topic-card/templates/concept }}
```

#### With custom slot

```html
{{#> n-topic-card/templates/concept withCustomSlot=true}}
    <div>Some custom content you wish to inject at the bottom of the card before the footer</div>
{{/ n-topic-card/templates/concept}}
```

### Client-side

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

Make sure that when used, n-myft-ui component styles are included in the head stylesheet of the app. If your app doesn't have n-myft-ui/components/follow-button style, please add this:

```
@import '@financial-times/n-myft-ui/components/follow-button/main';';
```

## Extra data

`responsive-grids` handles scenarios where you want particular cards to be hidden at certain breakpoints. For example, on the home page only 3 myFT concept cards are shown between the medium and large breakpoints.  This decorator requires the data item `show` with the settings in an object e.g. `{ default: true, M: false, XL: true }`.

The decorator finds an image from the list of articles to be displayed, and if it cannot find one uses a default.

## Demo page

`make demo`: Serves examples of the component locally (`http://localhost:5005`), using dummy data and in isolation from an app.

This is done on a simple express app which renders a single demo page that calls the partials to exhibit, populating them with data from a fixture.

## Pa11y

`make a11y`: Serves page of demo components, on which it runs [Pa11y](http://pa11y.org/) accessibility tests (errors flagging up accessibility infringements), which will also be run as part of the Continuous Integration (CI) process.
