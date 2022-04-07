const app = require("express")();
const http = require("http").Server(app);

const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

ids = {};

io.on("connection", (socket) => {
  ids[socket.handshake.headers.name] = socket.id
  console.log("this is my object");
  console.log(ids);
  

  socket.on("showAngularNotification", (data) => {
    io.to(ids.angular).emit("showNotification")
  });
});



http.listen(4444, () => {
  console.log("Listening on port 4444");
});
