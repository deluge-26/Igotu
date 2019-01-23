const fs = require('fs');
const path = require('path');
const s3 = require('../model/aws-upload');

const imageController = {};

imageController.upload = (req, res, next) => {
  console.log('uploaing image!');
  // TODO: figure out what the req.body is exactly ->
  //  ??: what will the img file look like on the body?

  const file = `${__dirname}/../../Jae.png`;

  const params = {
    // which bucket in S3 to store file in
    Bucket: process.env.AWSS3Bucket,
    // the image data
    Body: fs.createReadStream(file),
    // figure out type vs disposition -> type is stored format?
    ContentType: 'image/jpeg',
    // the new key for the image -> helps generate unique URL
    Key: `images/${Date.now()}_${path.basename(file)}`,
    // figure out type vs disposition -> disposition is incoming format?
    ContentDispositon: 'inline; filename=filename.png',
    // access control -> everyone can read
    ACL: 'public-read',
  };

  s3.upload(params)
    .promise()
    .then((data) => {
      console.log(`uploaded photo, got back data: ${data.Location}`);
      next();
    })
    .catch((err) => {
      console.log(`WHOOPS! ${err}`);
      next();
    });

  // s3.upload(params, (err, data) => {
  //   if (err) console.log(`WHOOPS! ${err}`);

  //   if (data) console.log(`got data: ${data}`);

  //   next();
  // });
};


module.exports = imageController;
