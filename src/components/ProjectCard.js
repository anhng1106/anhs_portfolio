import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, codeUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="view-code-btn"
          >
            See More
          </a>
        </div>
      </div>
    </Col>
  );
};
