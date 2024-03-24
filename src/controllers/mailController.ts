import MailHandler from '../services/MailHandler';
import { mailTemplate } from '../services/MailTemplate';
import { Request, Response } from 'express';

export async function sendMail(req: Request, res: Response) {
  try {
    const { userName, subjectText, userEmail } = req.body;

    const emailConfig = {
      userName,
      subjectText,
      html: mailTemplate(userName, userEmail, '0000'),
      userEmail,
    };

    const mailSent = await MailHandler(emailConfig);

    if (mailSent) {
      res.status(200).json({ message: 'Mail sent successfully' });
    } else {
      res.status(500).json({ message: 'Mail not sent' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Mail not sent' });
  }
}
