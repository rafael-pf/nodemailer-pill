import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function MailHandler(emailConfig: {
  userName: string;
  userEmail: string;
  subjectText: string;
  html: string;
}) {
  try {
    // create reusable transporter object
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // send mail with defined transport object
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: emailConfig.userEmail,
      subject: emailConfig.subjectText,
      html: emailConfig.html,
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default MailHandler;
