import React from 'react';
import PersonCard from '../components/PersonCard';
import "./style/AboutUs.css";


const ProfileData = [
                        {
                            photo: "https://picsum.photos/200/120",
                            name: "persona uno",
                            github: "https://github.com/",
                            linkedin: "https://www.linkedin.com/"
                        },
                        {
                            photo: "https://picsum.photos/200/120",
                            name: "persona dos",
                            github: "https://github.com/",
                            linkedin: "https://www.linkedin.com/"
                        },
                        {
                            photo: "https://picsum.photos/200/120",
                            name: "persona tres",
                            github: "https://github.com/",
                            linkedin: "https://www.linkedin.com/"
                        },
                        {
                            photo: "https://picsum.photos/200/120",
                            name: "persona cuatro",
                            github: "https://github.com/",
                            linkedin: "https://www.linkedin.com/"
                        },
                        {
                            photo: "https://picsum.photos/200/120",
                            name: "persona cinco",
                            github: "https://github.com/",
                            linkedin: "https://www.linkedin.com/"
                        },
]

export default () => {
  return <div className="about_container">

    <div className="title">
        <h1>Sobre nosotros</h1>
        <p>Quienes aportamos a este proyecto</p>
    </div>

    <div className="person_list">
    {
        ProfileData.map((personData) => <PersonCard photo={personData.photo}
                                                    name={personData.name}
                                                    gitlink={personData.github}
                                                    lilink={personData.linkedin}
                                                    className="pc_card"
                                        ></PersonCard>)
    }
    </div>

    <div className="footer">
        <p>FRONTEND CAFE</p>
    </div>
  </div>
}
