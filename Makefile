BIN = $(PWD)/node_modules/.bin

example::
	@(cd example; $(BIN)/webpack --hide-modules)

watch-example::
	@(cd example; $(BIN)/webpack --watch --hide-modules)

publish-example::
	@(cd example;\
		rm -rf .git;\
		git init .;\
		$(BIN)/webpack -p;\
		git checkout -b gh-pages;\
		git add .;\
		git commit -m 'Update';\
		git push -f git@github.com:andreypopp/react-fa.git gh-pages;\
	)

lint::
	@$(BIN)/jsxhint ./index.js ./Icon.js

release-patch: test lint
	@$(call release,patch)

release-minor: test lint
	@$(call release,minor)

release-major: test lint
	@$(call release,major)

publish:
	@git push --tags origin HEAD:master
	@npm publish

define release
	npm version $(1)
endef
