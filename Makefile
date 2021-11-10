SHELL = /bin/bash

build: install lint

install:
	docker build --target build . -t patch-node-build && \
	docker run --rm -v $(PWD):/data patch-node-build

lint:
	docker build --target lint . -t patch-node-lint && \
	docker run --rm -v $(PWD):/data patch-node-lint .

test:
	npm run test

.PHONY: build test