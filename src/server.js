var http = require("http");
http.post = require('http-post');

function start() {
    var url = 'http://a4d48cd6c55ad11e788ef02f8a27348d-569234994.us-west-2.elb.amazonaws.com:3000/reports';
    var files = [
        {
            param: "mochaFiles",
            path: './mochawesome-report/mochawesome.json'
        }
    ];

    http.post(url, [],files, function(res){
        console.log('res =>' + res);
        res.on('data', function(chunk) {
            console.log(chunk);
        });

        res.on('end', function(chunk) {
            console.log(chunk);
        });
    });
}

exports.start = start;