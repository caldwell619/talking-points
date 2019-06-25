#!/bin/sh

printf "\nBuilding.."
printf "\n"
npm run build

printf "\nUploading to S3.."
printf "\n"
aws s3 sync \
  ./build/ \
  s3://talking-points-for-by-n0w/