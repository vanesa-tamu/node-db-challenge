const server = require('./api/server.js')

const port = 1776

server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});