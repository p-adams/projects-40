import express from "express";
import { WebSocketServer } from "ws";
import { toString } from "../helpers/parse";

interface Message {
  username: string;
  text: string;
  sent: Date;
}

function handleWebSocket() {
  const app = express();

  // Create a WebSocket server
  const wss = new WebSocketServer({ noServer: true });

  const messages: Array<Message> = [
    { username: "foo_bar_baz", text: "Meow meow meow", sent: new Date() },
    { username: "test_", text: "Woof woof woof", sent: new Date() },
  ];

  // Listen for WebSocket connections
  wss.on("connection", (socket) => {
    console.log("WebSocket client connected");

    // Send a welcome message to the client
    socket.send(toString(messages));

    // Handle incoming messages from the client
    socket.on("message", (message) => {
      console.log(`Received message: ${message}`);

      // Send a response back to the client
      socket.send(`You sent: ${message}`);
    });

    // Handle disconnections
    socket.on("close", () => {
      console.log("WebSocket client disconnected");
    });
  });

  // Upgrade incoming HTTP requests to WebSocket connections
  app.use((request, response) => {
    if (request.headers["upgrade"] !== "websocket") {
      // Not a WebSocket request, pass it to the next middleware
    }

    wss.handleUpgrade(request, request.socket, Buffer.alloc(0), (socket) => {
      wss.emit("connection", socket, request);
    });
  });

  // Start the server
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}
handleWebSocket();

export default {};
