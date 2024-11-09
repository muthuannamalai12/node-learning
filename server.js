const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretInfo") {
    res.end("There is no secret data here");
    return;
  }
  res.end("Hello World");
});

server.listen(7878);
