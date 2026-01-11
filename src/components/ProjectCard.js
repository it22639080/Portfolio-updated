import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div 
        className="proj-imgbx"
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '10px',
          marginBottom: '24px'
        }}
      >
        <img 
          src={imgUrl} 
          alt={title}
          style={{
            width: '100%',
            height: '250px',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block'
          }}
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <h6 style={{ cursor: "pointer", color: "#0d6efd" }}>See more ... </h6>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};