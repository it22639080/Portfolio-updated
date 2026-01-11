import { Briefcase, Code, User } from "lucide-react";
import { StarBackground } from './StartBackground';

export const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <StarBackground />
      <div className="about-container">
        <h2 className="about-heading">
          About <span className="primary-color">Me</span>
        </h2>

        <div className="about-grid">
          <div className="about-text">
            <h3 className="about-subheading">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="muted-text">
             As an Information Technology third year undergraduate of SLIIT campus my expertise spans across
full stack development and I have successfully completed and contributed to numerous projects
that leverage my expertise in full stack development.
            </p>

            <p className="muted-text">
              I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.
            </p>

            <div className="about-buttons">
              <a href="#connect" className="primary-button">
                Get In Touch
              </a>

              <a href="https://mysliit-my.sharepoint.com/personal/it22639080_my_sliit_lk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fit22639080%5Fmy%5Fsliit%5Flk%2FDocuments%2FMy%20cv%2FkavinduM%2Epdf&parent=%2Fpersonal%2Fit22639080%5Fmy%5Fsliit%5Flk%2FDocuments%2FMy%20cv&ga=1" className="outline-button">
                Download CV
              </a>
            </div>
          </div>

          <div className="about-cards">
            <div className="info-card">
              <div className="icon-wrapper">
                <Code className="icon" />
              </div>
              <div className="card-content">
                <h4 className="card-title">Web Development</h4>
                <p className="muted-text">
                  Creating responsive websites and web applications with modern frameworks.
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <User className="icon" />
              </div>
              <div className="card-content">
                <h4 className="card-title">UI/UX Design</h4>
                <p className="muted-text">
                  Designing intuitive user interfaces and seamless user experiences.
                </p>
              </div>
            </div>

            {/* <div className="info-card">
              <div className="icon-wrapper">
                <Briefcase className="icon" />
              </div>
              <div className="card-content">
                <h4 className="card-title">Project Management</h4>
                <p className="muted-text">
                  Leading projects from conception to completion with agile methodologies.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
