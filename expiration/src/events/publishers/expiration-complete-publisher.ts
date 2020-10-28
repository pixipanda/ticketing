import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@pixipanda/common";

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
