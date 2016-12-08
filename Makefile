include n.Makefile

unit-test:
	mocha --recursive --reporter spec tests

test-build:
	node-sass demos/src/demo.scss --include-path bower_components --output public/

a11y: test-build
	node .pa11yci.js
	node demos/app

test: verify unit-test a11y
