import React from "react";
import { Link } from "react-router-dom";

const services = [
{
  icon: "bi-activity",
  title: ".NET",
  description:
    ".NET ek powerful framework hai jo secure, scalable aur high-performance applications banane ke liye use hota hai. Iska use web, desktop aur enterprise-level applications develop karne ke liye kiya jata hai.",
  delay: 100,
},
{
  icon: "bi-broadcast",
  title: "PHP",
  description:
    "PHP ek powerful server-side scripting language hai jo dynamic websites aur web applications banane ke liye use hoti hai. Ye databases ke sath easily integrate hoti hai aur forms, authentication, aur backend logic handle karti hai.",
  delay: 200,
},
{
  icon: "bi-easel",
  title: "Angular",
  description:
    "Angular ek powerful frontend framework hai jo dynamic aur scalable single-page applications banane ke liye use hota hai. Ye .NET APIs ke sath easily integrate hota hai aur secure, fast data communication provide karta hai.",
  delay: 300,
},
{
  icon: "bi-bounding-box-circles",
  title: "MERN Stack",
  description:
    "MERN Stack ek full-stack development technology hai jisme MongoDB, Express.js, React.js aur Node.js shamil hote hain. Iska use modern, scalable aur high-performance web applications banane ke liye kiya jata hai.",
  delay: 400,
},

{
  icon: "bi-calendar4-week",
  title: "Flutter",
  description:
    "Flutter ek open-source UI framework hai jo single codebase se fast aur beautiful mobile applications (Android & iOS) develop karne ke liye use hota hai. Ye high performance aur smooth UI provide karta hai.",
  delay: 500,
},

{
  icon: "bi-chat-square-text",
  title: "Social Media Marketing",
  description:
    "Social Media Marketing ka use brands aur businesses ki online presence grow karne ke liye hota hai. Isme content creation, audience engagement, page management aur analytics ke zariye reach aur sales improve ki jati hai.",
  delay: 600,
},

];

function Services() {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={service.delay}
              key={index}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>{service.title}</h3>
                </a>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>





  );
}

export default Services;
