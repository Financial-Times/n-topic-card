node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

IGNORE_A11Y = true

unit-test:
	mocha --recursive --reporter spec tests

demo-build:
	@rm -rf node_modules/@financial-times/n-topic-card
	@mkdir node_modules/@financial-times/n-topic-card
	@cp -r templates/ node_modules/@financial-times/n-topic-card/templates/
	@sass demos/src/main.scss public/main.css --load-path node_modules
	@$(DONE)

demo: demo-build
	@node demos/app

a11y: demo-build
	@node .pa11yci.js
	@PA11Y=true node demos/app
	@$(DONE)

test: verify unit-test a11y
