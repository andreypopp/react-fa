BIN = $(PWD)/node_modules/.bin

example::
	(cd example; $(BIN)/webpack --hide-modules)

watch-example::
	(cd example; $(BIN)/webpack --watch --hide-modules)

publish-example::
	(cd example;\
		rm -rf .git;\
		git init .;\
		$(BIN)/webpack -p;\
		git checkout -b gh-pages;\
		git add .;\
		git commit -m 'Update';\
		git push -f git@github.com:andreypopp/react-fa.git gh-pages;\
	)
