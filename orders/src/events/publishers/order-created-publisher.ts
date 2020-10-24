import { Publisher, OrderCreatedEvent, Subjects } from "@pixipanda/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
