echo "Building sass..."
sass styles/sass/styles.sass styles/styles.css --style compressed --sourcemap=none
rm -rf dist/*
mkdir dist/scripts
cp scripts/* dist/scripts/
mkdir dist/styles
cp styles/styles.css dist/styles/
cp index.html dist/
cp robots.txt dist/
cp sitemap.xml dist/
mkdir dist/assets
cp assets/* dist/assets/ -r
cp mmits-config.json dist/

echo "Build Completed"
