import {PaymentCreatedEvent, Publisher, Subjects} from "@k8s-course/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}