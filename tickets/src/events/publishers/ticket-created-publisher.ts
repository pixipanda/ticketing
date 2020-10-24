import { Publisher, TicketCreatedEvent, Subjects } from "@pixipanda/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
