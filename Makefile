gh-pages:
	-git checkout -b gh-pages
	-git checkout gh-pages
	git reset --hard master
	npm run build
	cp dist/* .
	git add . && git commit -m "Update github pages"
	git push origin gh-pages
	git checkout master
