import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/images/Fanconvo-header-logo.png";
import "./style.scss";

const Header = () => {
	return (
		<Container className="header">
			<Row className="mt-2">
				<Col className="d-flex justify-content-between">
					<img className="logo" src={logo} alt="logo" />
					<span>Signup Login</span>
				</Col>
			</Row>
			<Row></Row>
		</Container>
	);
};
export default Header;
