BIN = $(PWD)/node_modules/.bin

example: build
	@(cd example; $(BIN)/webpack --hide-modules)

watch-example: build
	@(cd example; $(BIN)/webpack --watch --hide-modules)

publish-example: build
	@(cd example;\
		rm -rf .git;\
		git init .;\
		$(BIN)/webpack -p;\
		git checkout -b gh-pages;\
		git add .;\
		git commit -m 'Update';\
		git push -f git@github.com:andreypopp/react-fa.git gh-pages;\
	)

test::
	@echo 'tests... OK'

lint::
	@$(BIN)/jsxhint ./src/index.js ./src/Icon.js

build::
	@mkdir -p dist
	@$(BIN)/jsx --harmony ./src/Icon.js > dist/Icon.js
	@$(BIN)/jsx --harmony ./src/index.js > dist/index.js

release-patch: test lint
	@$(call release,patch)

release-minor: test lint
	@$(call release,minor)

release-major: test lint
	@$(call release,major)

publish: build
	@git push --tags origin HEAD:master
	@npm publish

define release
	npm version $(1)
endef
