import React from 'react';
import PersonCard from '../components/PersonCard';
import "./style/AboutUs.css";


const ProfileData = [
                        {
                            photo: "https://avatars.githubusercontent.com/u/21157995?v=4",
                            name: "Jorge Ocampo",
                            rol: "Coordinación",
                            github: "https://github.com/JorgeJOcampo",
                            linkedin: "https://www.linkedin.com/in/jorge-ocampo-b95b3aa3/"
                        },
                        {
                            photo: "https://media-exp1.licdn.com/dms/image/C4E03AQHUYYS1xrC61w/profile-displayphoto-shrink_200_200/0/1619453574642?e=1625702400&v=beta&t=sLgjdFWXqPEVZnCRGwwIHfa7qriLUNxTvO2mhGUPpXU",
                            name: "Florencia Licarzi",
                            rol: "Diseño y Desarrollo FrontEnd",
                            github: "https://github.com/florencialicarzi",
                            linkedin: "https://www.linkedin.com/in/florencia-licarzi-476218175/"
                        },
                        {
                            photo: "https://avatars.githubusercontent.com/u/66853369?v=4",
                            name: "Anibal Olivares",
                            rol: "Desarrollo FrontEnd",
                            github: "https://github.com/AnibalDBXD",
                            linkedin: "https://www.linkedin.com/in/anibaloz/"
                        },
                        {
                            photo: "https://avatars.githubusercontent.com/u/68061699?v=4",
                            name: "Ramón",
                            rol: "Desarrollo FrontEnd",
                            github: "https://github.com/ramonrp",
                            linkedin: "https://www.linkedin.com/"
                        },
                        {
                            photo: "https://avatars.githubusercontent.com/u/53021974?v=4",
                            name: "Nicolas Juanicó",
                            rol: "Desarrollo BackEnd",
                            github: "https://github.com/JuaNicolas",
                            linkedin: "https://www.linkedin.com/in/nicolas-agustin-juanico/"
                        },
]

const AboutUs = () => {
  return <div className="about_container">

    <div className="title">
        <h1>Sobre nosotros</h1>
        <p>Quienes aportamos a este proyecto</p>
    </div>

    <div className="person_list">
    {
        ProfileData.map((personData) => <PersonCard photo={personData.photo}
                                                    name={personData.name}
                                                    rol={personData.rol}
                                                    gitlink={personData.github}
                                                    lilink={personData.linkedin}
                                                    className="pc_card"
                                        ></PersonCard>)
    }
    </div>

    <div className="footer">
        <p>CMYK 3.0 - Frontend Café</p>
    </div>
  </div>
}

export default AboutUs;
