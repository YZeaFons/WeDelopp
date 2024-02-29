const sendEmails = require('../controllers/sendEmail');

function handleSendEmail(req, res) {
  try {
    const { to, subject, html } = req.body;
    sendEmails(to, subject, html);
    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while sending the email' });
  }
}

module.exports = { handleSendEmail };