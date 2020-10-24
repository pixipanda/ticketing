import { Publisher, TicketUpdatedEvent, Subjects } from "@pixipanda/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
