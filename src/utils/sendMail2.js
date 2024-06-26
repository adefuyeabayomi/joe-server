const Mailbit = require('mailbit-library-nodejs');
const apiKey = process.env.MAIl_BIT_API_KEY
const mailbit = new Mailbit(apiKey);
const emailData = {
    toAddress: 'adefuyeabayomi16@gmail.com',  // Recipient's email address
    subject: 'Order Request',  // Subject of the email
    template: undefined,  // HTML content of the email
    from: 'adefuyeabayomi16@gmail.com',  // Sender's email address
    senderName: 'JC Ordering System',  // Sender's name
    replyTo: 'joegreencafeteriaservice@gmail.com',  // Reply-to email address
    attachments: []  // List of attachments (empty in this basic example)
};

function orderRequest({ name, contactNumber, meal, totalPrice, addons }) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Request</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .header {
        background-color: #4CAF50;
        color: #ffffff;
        padding: 10px 20px;
        border-radius: 8px 8px 0 0;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
      }
      .content {
        padding: 20px;
      }
      .content h2 {
        font-size: 20px;
        margin-top: 0;
      }
      .content p {
        font-size: 16px;
        line-height: 1.5;
      }
      .footer {
        background-color: #4CAF50;
        color: #ffffff;
        text-align: center;
        padding: 10px;
        border-radius: 0 0 8px 8px;
        margin-top: 20px;
      }
      .flex-container {
        display: flex;
        justify-content: space-between;
      }
      .flex-container p {
        margin: 0;
      }
      .addon-list {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>New Order Request</h1>
      </div>
      <div class="content">
        <h2>Order Details</h2>
        <p><strong>Order by:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${contactNumber}</p>
        <p><strong>Meal Ordered:</strong> ${meal.title}</p>
        <p>${meal.description}</p>
        <div class="flex-container">
          <p><strong>Price:</strong></p>
          <p>${meal.price}</p>
        </div>
        <p><strong>Add-ons:</strong></p>
        ${addons.map(addon => `
          <div class="flex-container">
            <p>${addon.name} (${addon.count})</p>
            <p>=${addon.price * addon.count}</p>
          </div>
        `).join('')}
        <div class="flex-container">
          <p><strong>Total Price:</strong></p>
          <p>${totalPrice}</p>
        </div>
      </div>
      <div class="footer">
        <p>&copy; 2024 Joe's Green Catering Services</p>
      </div>
    </div>
  </body>
  </html>
  `
  }
  
  let htmlBodyTemplates = {
    orderRequest,
  };

module.exports = {emailData,htmlBodyTemplates,mailbit}