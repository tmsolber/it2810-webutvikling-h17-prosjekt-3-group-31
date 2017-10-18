const express = require('express');

const app = express();


app.use(express.static(__dirname + '/build'));

app.listen(8083, function () {
    console.log('server started on port 8083');
});