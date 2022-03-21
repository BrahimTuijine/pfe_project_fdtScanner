const app = require("express")();
const http = require("http").Server(app);

const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});


ids = []



io.on("connection", (socket) => {
  console.log(socket.id);
  ids.push(socket.id)
  console.log("this is my tab ids ");
  console.log(ids);


  socket.on("hello" , (data) => {
    console.log(data);
    io.to(ids[0]).emit("fromAngular" , data)
  });


});

http.listen(4444, () => {
  console.log("Listening on port 4444");
});

