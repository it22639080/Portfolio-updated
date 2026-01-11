import { useState } from "react";
import { StarBackground } from './StartBackground';
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "SpringBoot", level: 65, category: "backend" },
 
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="skills-section">
     <StarBackground />
      <div className="skills-container">
        
        <h2 className="skills-heading">
          My <span className="primary-color">Skills</span>
        </h2>

        <div className="skills-filters">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "skills-filter-button",
                activeCategory === category ? "active" : ""
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="skill-card">
              <div className="skill-title">{skill.name}</div>

              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="progress-label">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};