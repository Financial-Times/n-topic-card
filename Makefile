include n.Makefile

IGNORE_A11Y = true

unit-test:
	mocha --recursive --reporter spec tests

demo-build:
	@rm -rf bower_components/n-concept
	@mkdir bower_components/n-concept
	@cp -r templates/ bower_components/n-concept/templates/
	@node-sass demos/src/main.scss public/main.css --include-path bower_components
	@$(DONE)

demo: demo-build
	@node demos/app

a11y: demo-build
	@node .pa11yci.js
	@PA11Y=true node demos/app
	@$(DONE)

test: verify unit-test a11y
