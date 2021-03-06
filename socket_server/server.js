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
  ids[socket.handshake.headers.name] = socket.id;
  console.log(ids);

  socket.on("getSegnalValue", (data) => {
    io.to(ids[data]).emit("getCurrentValue");
  });

  socket.on("showAngularNotification", () => {
    io.to(ids.angular).emit("showNotification" );
  });
  socket.on("showAngularNotificationInfo", () => {
    io.to(ids.angular).emit("showNotificationInfo" );
  });

  socket.on("segnalValue", (data) => {
    io.to(ids.angular).emit("pythonSegnalValue", data.value);
  });

  socket.on("userAccept", (data) => {
    console.log(ids[data])
    io.to(ids[data]).emit("requestAccepted");
  });
});

http.listen(4444, () => {
  console.log("Listening on port 4444");
});
