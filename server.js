const routeguide = require("./routeguide");
const grpc = require("grpc");

const {
  numberToNumber,
  streamNumbers,
  bidiNumbers
} = require("./service-methods");

function getServer() {
  var server = new grpc.Server();
  server.addService(routeguide.RouteGuide.service, {
    numberToNumber,
    streamNumbers,
    bidiNumbers
  });
  return server;
}

var routeServer = getServer();
routeServer.bind("0.0.0.0:3000", grpc.ServerCredentials.createInsecure());
routeServer.start();
