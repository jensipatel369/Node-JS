const http = require("http");
const port = 2312;

const postHandler = (req, res) => {
    res.write("Hello, This is node server..!");
    res.end();
}

const server = http.createServer(postHandler);

server.listen(port,(err)=>{
    err ? console.log(err) : console.log(`Server is running on port : ${port}`);
})