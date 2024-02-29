import ProjectsCard from "../../components/projectsCard/ProjectsCard";
import style from "./Projects.module.css";
import projectsProvider from "../../utils/provider/projectsProvider/projectsProvider";
import { useEffect, useState } from "react";
import PaginateProyect from "../../components/paginateProject/PaginateProyect";
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import texto from './../../../public/images/texto.png'

export default function Projects({ setSelectedOptions, selectedOptions }) {
  const [t, i18n] = useTranslation("global");

  // const [selectedOptions, setSelectedOptions] = useState([])
  const [projects, setProjects] = useState([])
  const [totalInfo, setTotalInfo] = useState([])

  const categoriesMain = [
    "E-commerce",
    "Tourism",
    "Health",
    "Landing Page",
    "Social Network",
    "Portfolio",
    "Entertainment",
  ];

  useEffect(() => {
    if (!selectedOptions.length) dataInit()
    else bringData()
  }, [selectedOptions])

  const dataInit = async (page = 1) => {
    const totalProjects = await projectsProvider.getProjects(page);
    setProjects(totalProjects.docs)
    const { docs, ...info } = totalProjects;
    setTotalInfo(info)
  }

  const bringData = async (page = 1) => {
    const valuesArray = selectedOptions.map(option => option.value);
    const response = await projectsProvider.getProjectByCategory({ categories: valuesArray, page: page });
    setProjects(response.docs)
    const { docs, ...info } = response;
    setTotalInfo(info)
  }

  const formattedOptions = categoriesMain.map(option => ({
    value: option,
    label: t(`Projects.projectsSelect.categories.${option}`),
    category: option
  }));
  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

  return (
    <div className={style.projectsContainer}>
      <div className={style.Title}>
        <img src={texto} alt="" />
      </div>

      <div className={style.containerProject}>
        <div className={style.selectContainer}>
          <Select
            isMulti
            value={selectedOptions}
            onChange={handleChange}
            options={formattedOptions}
            className={style.selectOptions}
          />
        </div>


        <div className={style.proyectos}>
          {
            projects.map((proyecto, index) => <ProjectsCard key={index} project={proyecto} />)
          }
        </div>

        <div className={style.paginate}>
          <PaginateProyect bringData={bringData} dataInit={dataInit} totalInfo={totalInfo} selectedOptions={selectedOptions} />
        </div>

      </div>
    </div>
  )
}
