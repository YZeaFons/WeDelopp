// SDK de Mercado Pago
const { MercadoPagoConfig, Payment } = require("mercadopago");
// Agrega credenciales
const client = new MercadoPagoConfig({
  accessToken:
  'TEST-8044533475948845-022019-af21cd73911e2e5a0a21744664b0fe4a-142403819'
});

const postMercadoPago = async(req, res) => {
try {
    const {data} = req.body
    const {id} = data

    const payment = await new Payment(client).get({id: id}) 

    res.status(200).send('success')
} catch (error) {
    
}

}

module.exports = postMercadoPago