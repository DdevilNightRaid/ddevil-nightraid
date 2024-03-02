export const sendmailCode = `
"use server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    pool: true,
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
        user: "sender@mail.com",
        pass: process.env.GMAIL_KEY
    },
    maxConnections: 1,
})
type EmailContent = {
    subject: string;
    body: string;
  };
export const sendEmail = async (emailContent: EmailContent) => {
    let resData;
    const mailOptions = {
      from: "sender@mail.com",
      to: "receiver@mail.com",
      html: emailContent.body,
      subject: emailContent.subject,
    };
  
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });
  
    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log("Email sent: ", info);
          resolve(info);
          return resData = info
        }
      });
    });
    return resData;
  };
`

export const myMailComponent = `
import React from 'react'

const bodyText = \`
    <h1>You Received a new mail.</h1>
    <p>Modify it as you see fit.</p>
\`

const MyMailComponent = () => {

    const sendMailFunction = async () => {
        await sendEmail({
            subject: "New mail🚀",
            body: bodyText,
        })
    }
    return (
        <div>
            <h2>Send a mail</h2>
            <button onClick={sendMailFunction}>Send</button>
        </div>
    )
}

export default MyMailComponent
`