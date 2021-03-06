    import express, {Request, Response} from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import cookieSession from "cookie-session";
import {errorHandler, NotFoundError, currentUser} from "@k8s-course/common";
import {createTicketRouter} from "./routes/new";
import {showTicketRouter} from './routes/show';
import {indexTicketRouter} from './routes';
import {updateTicketRouter} from './routes/update';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== "test"
    })
);
app.use(currentUser);

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

app.get("/", (req: Request, res: Response) => {
    res.status(200).send();
});

app.all("*", async (req: Request, res: Response) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export {app};