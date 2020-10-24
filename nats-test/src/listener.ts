import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import { TicketCreatedListener } from "./events/ticket-created-listener";

const consumer = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

consumer.on("connect", () => {
  console.log("Listener connected to the NATS");

  consumer.on("close", () => {
    console.log("NATS connection closed");
    process.exit();
  });

  new TicketCreatedListener(consumer).listen();
});

process.on("SIGINT", () => {
  consumer.close;
});

process.on("SIGTERM", () => {
  consumer.close;
});
