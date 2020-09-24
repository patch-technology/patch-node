SHELL = /bin/bash

build:
	npx prettier --write . && \
	npm run build

test:
	npm run test

.PHONY: build test