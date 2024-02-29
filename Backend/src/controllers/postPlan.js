const { createPlan } = require("../services/planServices");


const postPlan = async(req, res) => {
  try {
    const { name, price, type } = req.body;
    if(name  && price && type) {
      const postPlan = await createPlan({
        name,
        price,
        type
      });
      
      res.status(200).json(postPlan);
    }else{
      return res.status(403)
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}
module.exports = postPlan