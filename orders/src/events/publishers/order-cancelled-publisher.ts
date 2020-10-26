import { Subjects, Publisher, OrderCancelledEvent } from "@pixipanda/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
