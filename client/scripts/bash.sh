#!/bin/bash
# echo "Build elmo-ui-components-visual-test image"
# docker build -t elmo-ui-components-visual-test .

echo "Run elmo-ui-components-visual-test container to run all visual regression test"
docker run --name=elmo-ui-components-visual-test -it -v ${PWD}/:/var/www/app:delegated circleci/node:8.12.0-browsers  /bin/bash -c "cd /var/www/app/scripts; sh visual-test.sh;"

echo "Stop elmo-ui-components-visual-test docker container"
docker stop elmo-ui-components-visual-test

echo "Remove elmo-ui-components-visual-test docker container"
docker rm elmo-ui-components-visual-test -f