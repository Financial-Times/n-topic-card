include n.Makefile

unit-test:
	mocha --recursive --reporter spec tests

demo-build:
	@node-sass demos/src/demo.scss --include-path bower_components --output public/
	@$(DONE)

a11y: demo-build
	@node .pa11yci.js
	@PA11Y=true node demos/app
	@$(DONE)

test: verify unit-test a11y
