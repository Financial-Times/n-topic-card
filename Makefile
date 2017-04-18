include n.Makefile

unit-test:
	mocha --recursive --reporter spec tests

# NB: demo will not work with newer versions of n-express/n-handlebars/n-ui
# leaving these here until they can work again

#demo-build:
#	@node-sass demos/src/main.scss --include-path bower_components --output public/
#	@$(DONE)

#demo: demo-build
#	@node demos/app

#a11y: demo-build
#	@node .pa11yci.js
#	@PA11Y=true node demos/app
#	@$(DONE)

test: verify unit-test
