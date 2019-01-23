const fs = require('fs');
const path = require('path');
const s3 = require('../model/aws-upload');

const imageController = {};

imageController.upload = (req, res, next) => {
  console.log('uploaing image!');

  // TODO: check if a file was sent -> yes, do work -OR- no, next();

  // const file = `${__dirname}/../../Jae.png`;
  const { file } = req.files;
  console.log('is buffer?', Buffer.isBuffer(file.data));
  const filePath = `${__dirname}/../temp/${file.name}`;


  file.mv(filePath, (err) => {
    if (err) return console.log(err);
    console.log('saved file to temp!');
  });


  const params = {
    // which bucket in S3 to store file in
    Bucket: process.env.AWSS3Bucket,
    // the image data
    Body: fs.createReadStream(filePath),
    // figure out type vs disposition -> type is stored format?
    ContentType: 'image/jpeg',
    // the new key for the image -> helps generate unique URL
    Key: `images/${Date.now()}_${file.name}`,
    // figure out type vs disposition -> disposition is incoming format?
    ContentDispositon: 'inline; filename=filename.png',
    // access control -> everyone can read
    ACL: 'public-read',
  };

  s3.upload(params)
    .promise()
    .then((data) => {
      console.log(`uploaded photo, got back data: ${data.Location}`);
      res.locals.imgURL = data.Location;
      // TODO: delete the file from temp folder
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
