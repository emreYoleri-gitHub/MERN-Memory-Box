import React from "react";
import { Col, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Row className="fixed-bottom" style={{ background: "black" }}>
        <Col className="text-center py-3 text-white">
          Copyright &copy; BloGozof
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
