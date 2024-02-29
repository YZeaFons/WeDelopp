const { findPreferenceByIdPreference, PutPreference, } = require("../services/preferenceService");
const accessToken = "TEST-8044533475948845-022019-af21cd73911e2e5a0a21744664b0fe4a-142403819";
const axios = require("axios");
const { mailApprovedMP, mailRejectedMP } = require("../utils/emailsMercadoPago");
const { findUserByEmail, updateUser } = require("../services/userService");




const getPaymentMP = async (req, res) => {
  try {
    const { payment_id, preference_id } = req.query;

    const searchPayment = await findPreferenceByIdPreference(preference_id);

    const payAidi = await axios(
      `https://api.mercadopago.com/v1/payments/${payment_id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const pay = {
      payId: Number(payment_id),
      emailMp: payAidi.data.payer.email,
      date_approved: payAidi.data.date_approved,
      date_created: payAidi.data.date_created,
      status: payAidi.data.status,
      payment_method_id: payAidi.data.payment_method_id,
      payment_type_id: payAidi.data.payment_type_id,
    }

    const preferenceUser = {
      quote: searchPayment.quote,
      title: searchPayment.title,
      preferenceId: preference_id,
      payId: Number(payment_id),
      emailMp: payAidi.data.payer.email,
      date_approved: payAidi.data.date_approved,
      date_created: payAidi.data.date_created,
      status: payAidi.data.status,
      payment_method_id: payAidi.data.payment_method_id,
      payment_type_id: payAidi.data.payment_type_id,
    }



    const data = await findUserByEmail(searchPayment.email)

    const userUpdate = await updateUser(data._id, {
      preference: preferenceUser
    })

    const newOrder = await PutPreference(searchPayment._id, pay);

    const mailer = {
      title: searchPayment.title,
      email: searchPayment.email,
      payId: Number(payment_id),
      date: payAidi.data.date_approved,
      status: payAidi.data.status,
      paymentType: payAidi.data.payment_type_id,
      paymentMethod: payAidi.data.payment_method_id,
      quote: searchPayment.quote,
      amount: searchPayment.amount
    }

    if (payAidi.data.status === "approved") {
      mailApprovedMP(mailer);
    }

    else if (payAidi.data.status === "in_process") {
      mailRejectedMP(mailer);
    }

    res.status(200).json(newOrder);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getPaymentMP;