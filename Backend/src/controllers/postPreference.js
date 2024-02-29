// SDK de Mercado Pago
const { MercadoPagoConfig, Preference } = require("mercadopago");
const { createPreference } = require("../services/preferenceService");
// Agrega credenciales
const client = new MercadoPagoConfig({
  accessToken:
    'TEST-8044533475948845-022019-af21cd73911e2e5a0a21744664b0fe4a-142403819'
});
const postPreference = async (req, res) => {
  try {
    const { title, price, quantity, quote, email } = req.body

    const body = {
      items: [
        {
          title,
          unit_price: Number(price),
          quantity: Number(quantity),
          currency_id: "ARS"
        },
      ],
      back_urls: {
        success: "https://we-delopp.vercel.app/successpayment",
        failure: "https://we-delopp.vercel.app/successpayment",
        pending: "https://we-delopp.vercel.app/successpayment",
      },
      auto_return: "approved",
      additional_info: quote
    };

    const preference = new Preference(client);

    try {
      const result = await preference.create({ body });
      const newObj = {
        email: email,
        preferenceId: result.id,
        title: title,
        amount: price,
        quote: quote,
      }

      const newPreferenceBD = await createPreference(newObj)

      res.status(200).json({ id: result.id });
    } catch (error) {
      console.log(error.message)
    }


  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = postPreference;