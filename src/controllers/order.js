// Controller function for processing an order
  const {transporter,mailOptions} = require('../utils/nodeMailerSetup')
  const {htmlBodyTemplates} = require('../utils/emailTemplates')
const processOrder = (req, res) => {
    const { name, contactNumber, meal, totalPrice, addons } = req.body;
    mailOptions.html =htmlBodyTemplates.orderRequest({ name, contactNumber, meal, totalPrice, addons })
    try {
            // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).send({error: error.message})
                console.log('Error occurred:', error)
            }
            console.log('Message sent:', info.messageId)
            res.status(200).send({message: 'Order Processed Successfully'})
        })
    }
    catch(err){
        console.error(err)
    }
  }

  module.exports = {processOrder}
