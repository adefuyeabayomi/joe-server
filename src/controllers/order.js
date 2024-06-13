// Controller function for processing an order

const {htmlBodyTemplates, mailerSendImplementation} = require('../utils/sendMail')
const processOrder = (req, res) => {
    const { name, contactNumber, meal, totalPrice, addons } = req.body;
  
    // Log the properties to the console
    console.log('Name:', name)
    console.log('Contact Number:', contactNumber)
    console.log('Meal:', meal)
    console.log('Total Price:', totalPrice)
    console.log('Add-ons:', addons)
  
    // Send a response back to the client
    // send mail
    console.log(
        htmlBodyTemplates.orderRequest({ name, contactNumber, meal, totalPrice, addons }))
    mailerSendImplementation(
    'joegreencafeteriaservice@gmail.com',
    'Joes Cafeteria Website',
    "New Order Request",
    htmlBodyTemplates.orderRequest({ name, contactNumber, meal, totalPrice, addons }),
    )
    .then((response) => {
        console.log(response)
    res.status(200).send('Order processed successfully');
    })
    .catch((err) => {
        console.log({ err })
        res.status(500).send({error: err.message});
    })
  };

  module.exports = {processOrder}
