import React from 'react';
import * as fs from 'fs';
import { parseStream } from 'fast-csv';


// var fileStream = fs.createWriteStream('/20201226/wordcloud.csv');
// var s3Stream = s3.getObject({Bucket: 'stock-wordcloud', Key: 'wordcloud.csv'}).createReadStream();

// // Listen for errors returned by the service
// s3Stream.on('error', function(err) {
//     // NoSuchKey: The specified key does not exist
//     console.error(err);
// });

// s3Stream.pipe(fileStream).on('error', function(err) {
//     // capture any errors that occur when writing data to the file
//     console.error('File Stream:', err);
// }).on('close', function() {
//     console.log('Done.');
// });



// var AWS = require('aws-sdk');
// var fs = require('fs');

// var params = {
//   Bucket: 'stock-wordcloud',
//   Key: 'wordcloud.csv'
// };
// var s3 = new AWS.S3();
// var file = fs.createWriteStream('wordcloud.csv');
// file.on('close', function(){
//     console.log('done');  //prints, file created
// });
// s3.getObject(params).createReadStream().on('error', function(err){
//     console.log(err);
// }).pipe(file);


// const s3Stream = s3.getObject(params).createReadStream()
//     require('fast-csv').parseStream(s3Stream)
//       .on('data', (data) => {
//         // do something here
//       })






function Bucket(){
    return function() {
        // dependencies
        const csv = require('fast-csv');
        const parse = require('csv-parser')
        const aws = require('aws-sdk');
        const s3 = new aws.S3({ apiVersion: '2006-03-01' });
        const wc = require('20201226/wordcloud.csv');


        exports.handler = (event, context, callback) => {
        // read S3 object stream
        var s3Stream = s3.getObject(params, (err, data) => {
            if (err) {
                console.log(err);
                const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
                console.log(message);
                callback(message);
            } else {
                console.log('CONTENT TYPE:', data.ContentType);
                callback(null, data.ContentType);
            }
        }).createReadStream();


        // read CSV with fast-csv
        // options for fast-csv npm
        var options = {
            headers:true,
            escape:'\\',
            trim:true,
        };

        csv.fromStream(s3Stream, options).on("data", function(data) {
            data.id = wc();
            data.createDate = new Date().toISOString();
            console.log(data);
        }).on("error", function(data) {
            console.error("Got an error: " + data);
        }).on("end", function() {
            console.log("Done reading.");
        });


        // read CSV with csv-parser
        var otherOptions = {
            columns : true,
            auto_parse : true,
            escape : '\\',
            trim : true,
        };
        var parser = parse(otherOptions);
        parser.on('data', function(data) {
            data.id = wc();
            data.createDate = new Date().toISOString();
            console.log(data);
        })
        .on('end',function(data) {
            //do something wiht csvData
            console.log(data);
        });
        s3Stream.pipe(parser);
        };
    }
}

export default Bucket;
