// mail template

export const mailTemplate = (name: string, email: string, token: string) => {
  return `
    <html>
        <head>
        <style>
            body {
            font-family: Arial, sans-serif;
            }
            .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            }
            .header {
            background-color: #f8f9fa;
            padding: 10px 0;
            text-align: center;
            }
            .content {
            padding: 20px;
            }
            .footer {
            background-color: #f8f9fa;
            padding: 10px 0;
            text-align: center;
            }
        </style>
        </head>
        <body>
        <div class="container">
            <div class="header">
            <h1>Welcome to our platform</h1>
            </div>
            <div class="content">
            <p>Hello ${name},</p>
            <p>Thank you for signing up. We are excited to have you on board.</p>
            <p>Click the link below to verify your email address.</p>
            <a href="http://localhost:3000/verify-email/${token}">Verify Email</a>
            </div>
            <div class="footer">
            <p>Made with 💚 and &lt; &#x0002F; &gt; by CITi</p>
            </div>
        </div>
        </body>
    </html>
    `;
};
