#!/bin/bash
cd ..

PUPPETEER__DIR="./node_modules/puppeteer/.local-chromium"

if ! [ -d "$PUPPETEER__DIR/linux-672088" ]
then
  if [ -d "$PUPPETEER__DIR" ]; 
  then 
    echo "Remove puppeteer local-chromium ..."
    rm -Rf $PUPPETEER__DIR; 
  fi

  echo "Install linux-672088 local-chromium ..."
  sudo unzip -o ./scripts/chromium/linux-672088.zip -d $PUPPETEER__DIR > /dev/null
fi

echo "Run visual regression test (this might take a few minutes) ..."
# Note: Do not add this as a script in package.json otherwise developers will 
# wrongly run it on their own machine instead of inside a container
./node_modules/.bin/react-scripts test --roots "${PWD}/src" --testMatch "${PWD}/src/**/*.visual.{js,ts}" --verbose

exit