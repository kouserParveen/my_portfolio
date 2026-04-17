import React, { useEffect } from "react";
import profileImg from "../img/profile-img.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    { name: "HTML", value: 100 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 75 },
    { name: "Photoshop", value: 55 },
  ];

  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="row justify-content-between gy-4">
              <div className="col-lg-5">
                <img src={profileImg} className="img-fluid" alt="Profile" />
              </div>
              <div className="col-lg-7 about-info">
                <p><strong>Name: </strong> <span>Kouser parveen</span></p>
                <p><strong>Profile: </strong> <span>React.js Developer</span></p>
                <p><strong>Email: </strong> <span>umer4040445@gmail.com</span></p>
                <p><strong>Phone: </strong> <span>(92) 3030466514</span></p>
              </div>
            </div>

            <div className="skills-content skills-animation">
              <h5>Skills</h5>
              {skills.map((skill, i) => (
                <div className="progress" key={i}>
                  <span className="skill">
                    <span>{skill.name}</span> <i className="val">{skill.value}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <div className="about-me">
              <h4>About me</h4>
              <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
                Nulla porttitor accumsan tincidunt.
              </p>
              <p>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Porttitor at sem.
              </p>
              <p>
                Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
