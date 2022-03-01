import {ExpirationCompleteEvent, Publisher, Subjects} from "@k8s-course/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}