include n.Makefile

unit-test:
	mocha --recursive --reporter spec tests

test: verify unit-test
test-build:
	node-sass demos/src/demo.scss --include-path bower_components --output public/

