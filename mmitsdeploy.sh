echo "Removing version before."
rm -rf ../mmits_deploy/*

echo "Copying the new version"
cp dist/mmits-site/en/* ../mmits_deploy/ -r

echo "Pushing to the repository"
d=$(date +%d/%m/%Y-%Hh:%Mm:%Ss)
cd ../mmits_deploy/ && git add -A && git commit -m "New auto version at ${d}" && git push origin master
cd ../mmits/

echo "Completed"
