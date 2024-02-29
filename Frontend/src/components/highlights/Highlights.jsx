import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import style from './Highlights.module.css'
import ProjectsButton from "../projectsButton/ProjectsButton";
import { useTranslation } from 'react-i18next';

const Highlights = () => {
  const [t, i18n] = useTranslation("global");
  const [projects, setProjects] = useState([
    { url: 'https://img.freepik.com/free-vector/watercolor-abstract-shapes-template-design_23-2149324861.jpg?w=1380&t=st=1707430805~exp=1707431405~hmac=dad2e714b36b0106825827f38d0d0cb50bac17a1f17af9e28fcc1528012c1f32' },
    { url: 'https://img.freepik.com/free-vector/travel-sale-home-page_52683-44156.jpg?w=1380&t=st=1707430512~exp=1707431112~hmac=1bebf41cc6feda8016199151fe09ec299c4da67fe6068fb332e5c330439471be' },
    { url: 'https://img.freepik.com/free-vector/fashion-sale-landing-page-concept_23-2148584182.jpg?w=1380&t=st=1707430067~exp=1707430667~hmac=0dbcf184dd3befe0dcac6eb1d32958ca846f9dfdcf97471d925ebf5c9fac3a17' },
    { url: 'https://img.freepik.com/free-vector/landing-page-travel-with-photo_23-2148378328.jpg?w=1380&t=st=1707430145~exp=1707430745~hmac=7f82bd87e3e891ddbdeef813784e936aeba5354942856cf7e1604f7f48b7cfb7' },
    { url: 'https://img.freepik.com/free-vector/landing-page-template-innovative-companies_23-2148691552.jpg?w=1380&t=st=1707430340~exp=1707430940~hmac=edebb677c9cf77b882dc45ee0f3ca8ff916e212f288219d8650661297247c056' },
    { url: 'https://img.freepik.com/free-vector/shopping-online-landing-page-concept_23-2148529366.jpg?w=1380&t=st=1707430394~exp=1707430994~hmac=1bb1323fce90c0475ee2e6b7cc508ea930535431ea2506eca60a9545ed767f91' },
    { url: 'https://img.freepik.com/free-vector/travel-sale-landing-page_23-2148636423.jpg?w=1380&t=st=1707430471~exp=1707431071~hmac=3ea6b0bbc56916778e2566489163c7631fde79f58ebc4e3954bb74aa0938d9f6' },
    { url: 'https://img.freepik.com/free-vector/flat-design-white-party-landing-page_23-2149325233.jpg?w=1380&t=st=1707430609~exp=1707431209~hmac=e7ebf737b2fa14117624a5648af3860e824be6e775bad86264b7e178592aaf15' },
    { url: 'https://img.freepik.com/free-vector/flat-design-night-club-landing-page_23-2149898780.jpg?w=1380&t=st=1707430702~exp=1707431302~hmac=58b19975d10ae02418353559518169049c41c1df5f563e0fac48692506a23414' },
  ])

  const carouselSettings = {
    showArrows: true,
    showThumbs: false,
    showStatus: true,
    infiniteLoop: true,
  }

  return (
    <div className={style.carouselcontainer}>
      <div className={style.containerTitle}>
        <h2>{t("Highlights.title")}</h2>
      </div>
      <div className={style.containerCarrusel}>
        <Carousel {...carouselSettings} autoPlay={true} interval={3000} infiniteLoop={true} className={style.carouselStyles} >
          {
            projects.map((project, index) => (
              <div key={index}>
                <img src={project.url} alt={`Image n${index}`} />
              </div>
            ))
          }
        </Carousel>
      </div>
      <div className={style.buttonContainer}>
        <ProjectsButton />
      </div>
    </div>
  )
}

export default Highlights