import express, {Request, Response} from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import cookieSession from "cookie-session";

import {currentUserRouter} from "./routes/current-user";
import {signInRouter} from "./routes/signin";
import {signOutRouter} from "./routes/signout";
import {signUpRouter} from "./routes/signup";
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

app.get("/", (req: Request, res: Response) => {
    res.status(200).send();
});

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.all("*", async (req: Request, res: Response) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export {app};