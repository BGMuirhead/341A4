
if [ $(node staticTest.js) = false ];
then
	echo "Comments not present in all .ts files"
	exit 2
fi 

echo 'Comment Check Has Passed'
echo ' '

npm install
echo ' '

#npm run build
#echo ' '

npm test
echo ' '

cd ../
git add .
git commit -m $1
git push origin master
#git status 

