include n.Makefile

unit-test:
	mocha --recursive --reporter spec tests

test: verify unit-test
