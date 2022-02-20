import express, {Request, Response} from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import cookieSession from "cookie-session";
import {errorHandler, NotFoundError} from "@k8s-course/common";

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== "test"
    })
);

app.all("*", async (req: Request, res: Response) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export {app};