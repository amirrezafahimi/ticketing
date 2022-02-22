import {Publisher, Subjects, TicketCreatedEvent} from "@k8s-course/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}