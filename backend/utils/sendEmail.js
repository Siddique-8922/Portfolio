import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
    // 1. Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // 2. Define the email options with a clean HTML template
    const mailOptions = {
        from: `Portfolio Contact Form <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // Sends the email to yourself
        replyTo: options.email,     // Allows you to hit 'reply' to email the client back directly
        subject: `New Portfolio Lead: ${options.subject}`,
        html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
                <h2 style="color: #4f46e5; margin-bottom: 20px;">New Contact Submission</h2>
                <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                    <p style="margin: 5px 0;"><strong>Name:</strong> ${options.name}</p>
                    <p style="margin: 5px 0;"><strong>Email:</strong> ${options.email}</p>
                </div>
                <h4 style="color: #374151; margin-bottom: 10px;">Message:</h4>
                <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #06b6d4; border-radius: 4px; color: #4b5563; line-height: 1.6;">
                    ${options.message.replace(/\n/g, '<br>')}
                </div>
                <p style="margin-top: 30px; font-size: 12px; color: #9ca3af; text-align: center;">
                    Sent automatically from your portfolio backend.
                </p>
            </div>
        `
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);
};

export default sendEmail;