import Contact from '../models/contactModel.js';
import sendEmail from '../utils/sendEmail.js';

export const submitContactForm = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Basic validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required' 
            });
        }

        // Save to Database
        const newContact = await Contact.create({
            name,
            email,
            subject,
            message
        });

        // Trigger Nodemailer email notification
        try {
            await sendEmail({
                name: newContact.name,
                email: newContact.email,
                subject: newContact.subject,
                message: newContact.message
            });
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            // We still return 201 because the database save was successful
            return res.status(201).json({
                success: true,
                message: 'Message saved, but email notification failed.',
                data: newContact
            });
        }

        res.status(201).json({
            success: true,
            message: 'Message sent and email notification triggered successfully!',
            data: newContact
        });

    } catch (error) {
        console.error('Contact Form Error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error, please try again later.' 
        });
    }
};