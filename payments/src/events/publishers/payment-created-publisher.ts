import { Publisher, PaymentCreatedEvent, Subjects } from "@pixipanda/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
