const AWS = require('aws-sdk');

// Configure the AWS environment -> supply our credentials
AWS.config.update({
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
  region: 'us-west-1',
});

const s3 = new AWS.S3();

module.exports = s3;
