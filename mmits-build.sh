echo "Removing old files"
rm -rf dist/*
echo "i18n processing for pt..."
static-i18n -o="dist/" -l="pt" -i="pt" app/
echo "i18n processing for en..."
static-i18n -o="dist/" -l="pt" -i="en" app/
echo "Creating script folder"
mkdir dist/scripts
echo "Creating styles folder"
mkdir dist/styles
echo "Gulp reloading task scripts"
gulp scripts
echo "gulp reloading task styles"
gulp styles
echo "Copying everything else it needs..."
cp robots.txt dist/
cp sitemap.xml dist/
cp app/mmits-config.json dist/
echo "Creating assets folder"
mkdir dist/assets
echo "Copying artefacts..."
cp app/assets/* dist/assets/ -r
echo "Build Completed"