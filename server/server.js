import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create transporter using your Gmail account (or other SMTP server)
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,  // Your email address
      pass: process.env.EMAIL_PASS,  // Your email password or App-specific password
    },
  });

  // Define the email options
  let mailOptions = {
    from: process.env.EMAIL_USER,  // Your email address (as the sender)
    to: process.env.RECEIVER_EMAIL,  // Your email address (as the recipient)
    subject: `New Contact Form Submission: ${subject}`,
    text: `Message from ${name} (${email}):\n\n${message}`,
    replyTo: email,  // This makes the reply go to the user's email address
  };

  try {
    // Send email to you (the website owner) with the form details
    await transporter.sendMail(mailOptions);

    // Optionally, you can send a confirmation email to the user
    let userMailOptions = {
      from: process.env.EMAIL_USER,  // Your email address (as the sender)
      to: email,  // Send confirmation to the user's email
      subject: `Thank you for contacting us, ${name}!`,
      text: `Hello ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nYour Company`,
    };

    // Send the confirmation email to the user
    await transporter.sendMail(userMailOptions);

    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email.");
  }
});

// Server listening
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
