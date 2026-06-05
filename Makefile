.PHONY: install dev format format-check test typecheck lint build check

install:
	yarn install

dev:
	yarn dev

format:
	yarn format

format-check:
	yarn format:check

test:
	yarn test

typecheck:
	yarn typecheck

lint:
	yarn lint

build:
	yarn build

check: format-check test typecheck lint build
