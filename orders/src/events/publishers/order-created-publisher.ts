import {OrderCreatedEvent, Publisher, Subjects} from "@k8s-course/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}