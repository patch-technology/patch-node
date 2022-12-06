SHELL = /bin/bash

build: install lint

install:
	docker build . -t patch-node-build && \
	docker run --rm -v $(PWD):/data patch-node-build npm install
	docker run --rm -v $(PWD):/data patch-node-build npm audit fix

lint:
	docker build . -t patch-node-build && \
	docker run --rm -v $(PWD):/data patch-node-build npx prettier --write .

test:
	npm run test

.PHONY: build test