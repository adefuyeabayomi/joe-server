const router = require('express').Router()
const {processOrder} = require('../controllers/order')

router.post('/process-order',processOrder)

module.exports = router