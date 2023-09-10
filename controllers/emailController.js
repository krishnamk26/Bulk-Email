const nodemailer = require('nodemailer');
const {EMAIL_ADDRESS,EMAIL_PASSWORD} = require("../utlis/config")

const sendBulkEmails = async (req, res) => {
  try {
    const { subject, message, recipients } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:EMAIL_ADDRESS,
        pass:EMAIL_PASSWORD,
      },
    });

    // Send emails to recipients
    for (const recipient of recipients) {
      const mailOptions = {
        from:  `"Krishna" <${EMAIL_ADDRESS}>`,
        to: recipient,
        subject,
        text: message,
      };

      await transporter.sendMail(mailOptions);
    }

    res.status(200).json({ message: 'Bulk emails sent successfully.' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ error: 'An error occurred while sending emails.' });
  }
};

module.exports = {
  sendBulkEmails,
};
