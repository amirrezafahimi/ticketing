import {Publisher, Subjects, TicketUpdatedEvent} from "@k8s-course/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}