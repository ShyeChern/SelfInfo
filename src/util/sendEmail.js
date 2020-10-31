import dotenv from 'dotenv'
dotenv.config();

export function sendEmail(name, email, message) {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    // userId not necessary because already initialize in the index.html
    // const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    const subject = "Email from Heroku Sample App";

    const emailResult = window.emailjs.send(
        serviceId, templateId,
        { senderName: name, subject: subject, message: message, senderEmail: email }
    ).then(res => {
        // console.log('Email successfully sent!');
        return true;
    })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => {
            // console.error('Oh well, you failed. Here some thoughts on the error that occured:', err);
            return err;
        })

    return emailResult;
}