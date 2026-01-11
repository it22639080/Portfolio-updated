//src\components\Projects.js

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import gym from "../assets/img/gym.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Gym Management System",
      description: "A comprehensive MERN stack application for gym operations management, featuring user authentication, notification system, and admin dashboard.",
      imgUrl: gym,
      link: 'https://github.com/it22639080/Gym-management-system.git',
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with product management, shopping cart",
      imgUrl: "https://tse4.mm.bing.net/th/id/OIP.q6lzErOfrGNdR9x9BpwajgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      link: 'https://github.com/it22639080/e-commerce.git',
    },
    {
      title: "Online Order System",
      description: "University-focused order management system with robust user authentication and order tracking capabilities",
      imgUrl: "https://tse1.mm.bing.net/th/id/OIP.EHIHgVsN4KXONCb4g-y-KAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
      link: 'https://github.com/it22639080/Hotel-management-system-using-java.git',
    },
   {
      title: "Live Chat Integration",
      description: "Interactive web platform featuring real-time chat functionality for enhanced user engagement.",
      imgUrl: "https://webcdn.callhippo.com/blog/wp-content/uploads/2022/08/Top-15-VoIP-Phones-for-Your-Business.png",
      link: 'https://github.com/it22639080/Web-page-with-live-chat.git',
    },
    {
      title: "Mobile Game App",
      description: "I’m thrilled to showcase my individual project for the **Mobile Application Development (MAD)** course, where I developed a mobile game application using **Kotlin**. ",
      imgUrl: "https://classplusapp.com/growth/wp-content/uploads/2022/06/6-Benefit-of-using-mobile-app-for-school-management-780x435.jpg",
      link: 'https://github.com/it22639080/2D-mobile-game-application-Kotlin.git',
    },
      {
      title: "Note App- Mobile App",
      description: "I’m excited to share my individual project for the Mobile Application Development (MAD) course: a Task Manager App developed using Kotlin and SQLite.Task Management: Create, update, and delete tasks with ease.",
      imgUrl: "https://as2.ftcdn.net/v2/jpg/05/75/32/97/1000_F_575329738_YZ2qNNQdhiLdQPHPDiwkCC0nUbIFjXvS.jpg",
      link: 'https://github.com/it22639080/2D-mobile-game-application-Kotlin.git',
    },
  ];
  const projects2 = [
    {
      title: "Social Support & Skill Development Platform",
      description: "A full-stack MERN (MongoDB, Express, React, Node.js) application designed to promote social impact through community engagement and personal development.",
      imgUrl: "https://th.bing.com/th/id/OIP.zp0X6g57kVDUXsW2I5oSDQHaD_?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      link: 'https://github.com/it22639080/itpm-skill-and-social-support.git',
    },
    {
      title: "Image-Search-Engine",
      description: "Design & Development",
      imgUrl: "https://kinsta.com/wp-content/uploads/2021/11/image-search-engine.png",
      link: 'https://github.com/it22639080/Image-Search-Engine.git',
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                     <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Upcoming...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
