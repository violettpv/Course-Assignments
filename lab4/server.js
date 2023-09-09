const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const formatMessage = require("./utils/messages");

// Port
const PORT = 3000 || process.env.PORT;

const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// [ on = receive a msg from a server ]
// [ emit = send a msg to a server ]

// run when a client connects
io.on("connection", (socket) => {
  let user = "";
  // Get user's username
  socket.on("username", (obj) => {
    user = obj.username;

    socket.emit(
      "message",
      formatMessage("Bot", `Welcome to Socket Chat, ${user}!`)
    );

    // Broadcast to everyone except the user who has joined
    socket.broadcast.emit(
      "message",
      formatMessage("Bot", `${user} has joined the chat.`)
    );
  });

  // When user disconnects
  socket.on("disconnect", () => {
    io.emit("message", formatMessage("Bot", `${user} has disconnected.`));
  });

  // Listen for a chatMessage
  socket.on("chatMessage", (msg) => {
    io.emit("message", formatMessage(`${user}`, msg));
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
