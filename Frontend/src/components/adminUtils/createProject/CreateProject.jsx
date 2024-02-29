import { useState } from "react";
import projectsProvider from "../../../utils/provider/projectsProvider/projectsProvider";
import style from './CreateProject.module.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CreateProject = () => {

  const [project, setproject] = useState({
    name: "",
    images: "",
    description: "",
    category: "",
  });

  const category = [
    "",
    "E-commerce",
    "Tourism",
    "Health",
    "Landing Page",
    "Social Network",
    "Portfolio",
    "Entertainment",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newProject = await projectsProvider.postProjects(project);
      setproject({
        name: "",
        images: "",
        description: "",
        category: category[0],
      });
      Swal.fire({
        icon: "success",
        title: "Your new project has been saved",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: 'center',
        }
      });
      return newProject;
    } catch (error) {
      return error.message;
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setproject({
      ...project,
      [e.target.name]: input,
    });
  };

  const handleCategory = (e) => {
    setproject({
      ...project,
      category: e.target.value,
    });
  };

  const handleImage = async (e) => {
    const imgFile = e.target.files[0];
    try {
      const { data } = await projectsProvider.uploadImg(imgFile);
      setproject({
        ...project,
        images: data.url,
      });
    } catch (error) { }
  };


  return (
    <div className={style.containerCreateProject}>
      <div className={style.flyerWebDevelop}>
        <div className={style.containerImage}>
          <img src='./images/logo-nav.png' alt="" />
          <span>By developers</span>
        </div>
        <Link to='/admin'><button className={style.buttonBack}>Back</button></Link>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.titleProject}>
          <h3>Create Project</h3>
        </div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={project.name}
          onChange={handleChange}
        />

        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={project.description}
          onChange={handleChange}
        />

        <label>Category: </label>
        <select name="category" onChange={handleCategory}>
          {category.map((e) => {
            return (
              <option value={e} key={e}>
                {e}
              </option>
            );
          })}
        </select>
        <div className={style.containerSelectArchivos}>
          <label>Import Image: </label>
          <input className={style.inputArchivos} type="file" name="image" onChange={handleImage} />
        </div>
        <div className={style.containerButton}>
          <button type="submit" /* disabled={!proyect.name && !proyect.category && !proyect.images && !proyect.description} */>Send</button>
        </div>
      </form>
      <div id="sweetAlertContainer" className={style.center}></div>
    </div>
  );
}

export default CreateProject