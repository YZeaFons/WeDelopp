require("dotenv").config();
const axios = require("axios");

const { ACCESS_TOKEN } = process.env;

const refreshPaymentMP = async (req, res) => {
    try {
        console.log('esto es query', req.body);
        const { payId } = req.query

        const { data } = await axios(
            `https://api.mercadopago.com/v1/payments/${payId}`,
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            }
        );
        res.status(200).json(data.status);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
module.exports = refreshPaymentMP;