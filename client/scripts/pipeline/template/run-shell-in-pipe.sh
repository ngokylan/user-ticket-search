STAGING_TEMPLATE_APP_AWS_S3_BUCKET=$1
STAGING_AWS_ACCESS_KEY_ID=$2
STAGING_AWS_SECRET_ACCESS_KEY=$3
BITBUCKET_BRANCH=$4
BITBUCKET_COMMIT=$5
TEMPLATE_APP_REPO=$6

echo "Try to reinstall the template app to the correct version"

sudo apt-get update 
sudo apt-get install zip yarn python-dev -y 
sudo curl -O https://bootstrap.pypa.io/get-pip.py 
sudo python get-pip.py 
sudo pip install awscli
export AWS_ACCESS_KEY_ID=$STAGING_AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY=$STAGING_AWS_SECRET_ACCESS_KEY VERSION_FILE="elmo_templateapp_version.html"

git clone $TEMPLATE_APP_REPO elmo-react-app
cd ./elmo-react-app

yarn install
yarn build
ls

echo "<li>$(date) :$BITBUCKET_BRANCH - $BITBUCKET_COMMIT</li>" >> $VERSION_FILE
aws s3 sync build s3://$STAGING_TEMPLATE_APP_AWS_S3_BUCKET/ --delete
aws s3 cp $VERSION_FILE s3://$STAGING_TEMPLATE_APP_AWS_S3_BUCKET/