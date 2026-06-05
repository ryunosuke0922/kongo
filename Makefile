.PHONY: install dev format format-check typecheck lint build check

install:
	yarn install

dev:
	yarn dev

format:
	yarn format

format-check:
	yarn format:check

typecheck:
	yarn typecheck

lint:
	yarn lint

build:
	yarn build

check: format-check typecheck lint build
