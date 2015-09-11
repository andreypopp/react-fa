.DELETE_ON_ERROR:

BABEL_OPTIONS = --stage 0
BIN           = ./node_modules/.bin
TESTS         = $(shell find src -path '*/__tests__/*-test.js')
SRC           = $(filter-out $(TESTS), $(shell find src -name '*.js'))
LIB           = $(SRC:src/%=lib/%)
NODE          = $(BIN)/babel-node $(BABEL_OPTIONS)

build:
	@$(MAKE) -j 8 $(LIB)

test::
	@NODE_ENV=test $(NODE) $(BIN)/mocha --compilers js:babel/register -- $(TESTS)

ci::
	@NODE_ENV=test $(NODE) $(BIN)/mocha --compilers js:babel/register --watch -- $(TESTS) 

lint::
	@$(BIN)/eslint ./src/

version-major version-minor version-patch: lint test
	@npm version $(@:version-%=%)

publish: build
	@git push --tags origin HEAD:master
	@npm publish

lib/%: src/%
	@echo "Building $<"
	@mkdir -p $(@D)
	@$(BIN)/babel $(BABEL_OPTIONS) -o $@ $<

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

clean:
	@rm -rf lib
