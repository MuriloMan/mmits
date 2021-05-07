echo "Removing old files"
rm -rf dist/*
echo "i18n processing for $1..."
static-i18n -o="dist/" -l="$1" -i="$1" app/
echo "Gulp reloading task scripts"
gulp scripts
echo "gulp reloading task styles"
gulp styles
echo "Creating script folder"
mkdir dist/scripts
echo "Copying scritps..."
cp app/scripts/mmits-script.min.js dist/scripts/
echo "Creating styles folder"
mkdir dist/styles
echo "Copying styles..."
cp app/styles/styles.min.css dist/styles/
echo "Copying everything else it needs..."
cp robots.txt dist/
cp sitemap.xml dist/
cp app/mmits-config.json dist/
echo "Creating assets folder"
mkdir dist/assets
echo "Copying artefacts..."
cp app/assets/* dist/assets/ -r
echo "Build Completed"