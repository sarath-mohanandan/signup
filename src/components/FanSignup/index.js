import React from "react";
import SignUpForm from "../SharedComponnts/SignUpForm";

import apiHandler from "../../utils/apiHandler";
import { Container } from "react-bootstrap";

const FanSignup = () => {
	const onSubmitTalent = async (values) => {
		const options = {
			path: "/sign-up/fan",
			method: "POST",
			body: values,
		};
		try {
			const result = await apiHandler(options);
			if (result) {
				if (result.code !== 200) {
					alert("signup error");
				}
				if (result.message) {
					alert(result.message);
				}
			}
		} catch (err) {
			console.log("err", err);
		}
	};
	return (
		<Container className="signup-container d-flex flex-column align-items-center justify-content-center">
			<h3 className="title mt-2">Create Your Fan Account </h3>
			<SignUpForm
				initialValues={{
					first_name: "Test user",
					last_name: "Testing",
					username: "tester-ht",
					email: "tester-ht@gmail.com",
					password: "Password12#",
					timezone: "America/New_York",
					captcha: true,
				}}
				onSubmit={onSubmitTalent}
			/>
		</Container>
	);
};
export default FanSignup;
