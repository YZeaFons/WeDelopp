const { createProject } = require("../services/projectService");

const postProject = async(req, res) => {
  try {
    const { name, images, description, category } = req.body;
    if(name  && images && description && category) {
      const form = await createProject({
        name,
        images,
        description,
        category
      });
      
      res.status(200).json(form);
    }else{
      return res.status(403)
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}
module.exports = postProject