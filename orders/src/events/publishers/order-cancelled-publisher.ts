import {OrderCancelledEvent, Publisher, Subjects} from "@k8s-course/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}