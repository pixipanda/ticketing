import { Publisher, OrderCancelledEvent, Subjects } from "@pixipanda/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrdderCancelled = Subjects.OrdderCancelled;
}
