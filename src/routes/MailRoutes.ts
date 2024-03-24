import { Router } from 'express';
import { sendMail } from '../controllers/mailController';

const MailRouter = Router();

MailRouter.route('/').post(sendMail);

export default MailRouter;
