const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { fromEnv } = require('@aws-sdk/credential-provider-node');
const uuid = require("uuid").v4;
// require('dotenv').config();
const config = require("../config/key");

// exports.s3Uploadv2 = async (files) => {
//   const s3 = new S3();

//   const params = files.map((file) => {
//     return {
//       Bucket: process.env.AWS_BUCKET_NAME,
//       Key: `uploads/${uuid()}-${file.originalname}`,
//       Body: file.buffer,
//     };
//   });

//   return await Promise.all(params.map((param) => s3.upload(param).promise()));
// };

exports.s3Uploadv3 = async(files) => {
  const s3client = new S3Client();
  // const params =  {
  //     Bucket: config.AWS_BUCKET_NAME,
  //     Key: `uploads/${uuid()}-${file.originalname}`,
  //     Body: file.buffer,
  // };

  // const result = s3client.send(new PutObjectCommand(params));
  // const imageUrl = `https://s3.console.aws.amazon.com/s3/object/${params.Bucket}?region=ap-south-1&prefix=${params.Key}`;
  // return imageUrl;
  const params = files.map((file) => {
    return {
      Bucket: config.AWS_BUCKET_NAME,
      Key: `uploads/${uuid()}-${file.originalname}`,
      Body: file.buffer,
    };
  });

  const results = await Promise.all(
    params.map((param) => s3client.send(new PutObjectCommand(param)))
  );

  const imageUrl = `https://${params[0].Bucket}.s3.amazonaws.com/${params[0].Key}`;
  return imageUrl;
};