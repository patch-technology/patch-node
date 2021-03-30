SHELL = /bin/bash

build:
	npm install && \
	npx prettier --write . && \
	npm run build

test:
	npm run test

.PHONY: build test