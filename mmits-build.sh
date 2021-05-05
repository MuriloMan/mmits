echo "Removing old files"
rm -rf dist/*
echo "Creating script folder"
mkdir dist/scripts
echo "Copying scritps..."
cp scripts/mmits-script.min.js dist/scripts/
echo "Creating styles folder"
mkdir dist/styles
echo "Copying styles..."
cp styles/styles.min.css dist/styles/
echo "Copying everything else it needs..."
cp index.html dist/
cp robots.txt dist/
cp sitemap.xml dist/
cp mmits-config.json dist/
echo "Creating assets folder"
mkdir dist/assets
echo "Copying artefacts..."
cp assets/* dist/assets/ -r

echo "Build Completed"