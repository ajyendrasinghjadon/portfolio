const sgMail = require('@sendgrid/mail');

// Set API Key from environment
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    console.log(`[API] Received submission from: ${name} <${email}>`);

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    // Email Transmission using SendGrid
    try {
        const msg = {
            to: process.env.RECEIVER_EMAIL || process.env.FROM_EMAIL, // Destination email
            from: process.env.FROM_EMAIL, // Verified SendGrid sender
            replyTo: email,
            subject: `New Portfolio Contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; border: 1px solid #e2e8f0; border-radius: 12px; max-width: 600px; color: #1a202c;">
                    <h2 style="color: #7c3aed; margin-bottom: 20px; font-size: 24px; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">New Portfolio Inquiry</h2>
                    <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
                    <p style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a></p>
                    <p style="margin-top: 20px; font-weight: bold; color: #4a5568;">Message:</p>
                    <div style="background: #f7fafc; padding: 20px; border-radius: 8px; border-left: 5px solid #7c3aed; font-style: italic; line-height: 1.6;">
                        ${message.replace(/\n/g, '<br/>')}
                    </div>
                    <footer style="margin-top: 30px; font-size: 12px; color: #a0aec0; text-align: center;">
                        This email was sent from your portfolio contact form.
                    </footer>
                </div>
            `,
        };

        console.log("[API] Sending email via SendGrid...");
        await sgMail.send(msg);
        console.log(`[API] ✅ Email sent successfully!`);

        return res.status(200).json({
            success: true,
            message: "Thank you! Your message has been sent successfully."
        });

    } catch (error) {
        console.error("[API] ❌ SendGrid Error:", error.response ? error.response.body : error.message);
        
        return res.status(500).json({
            success: false,
            message: "An error occurred while sending your message. Please try again later.",
        });
    }
};
