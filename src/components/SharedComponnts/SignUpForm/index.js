import { Formik } from "formik";
import React from "react";
import { Form, Button } from "react-bootstrap";

import { loginValidationSchema } from "./helper";

const FanSignup = ({ onSubmit, initialValues = {} }) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={loginValidationSchema}
			onSubmit={onSubmit}>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
			}) => (
				<Form className="form" onSubmit={handleSubmit}>
					<Form.Group className="md-4 ">
						<Form.Label>First Name*</Form.Label>
						<Form.Control
							type="text"
							name="first_name"
							value={values.first_name}
							placeholder="First Name"
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.first_name && touched.first_name ? (
							<div>{errors.first_name}</div>
						) : null}
					</Form.Group>
					<Form.Group>
						<Form.Label>Last Name*</Form.Label>
						<Form.Control
							type="text"
							name="last_name"
							value={values.last_name}
							placeholder="Last Name"
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.first_name && touched.first_name ? (
							<div>{errors.first_name}</div>
						) : null}
					</Form.Group>
					<Form.Group>
						<Form.Label>Email*</Form.Label>
						<Form.Control
							type="email"
							name="email"
							value={values.email}
							placeholder="Email"
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.first_name && touched.first_name ? (
							<div>{errors.first_name}</div>
						) : null}
					</Form.Group>
					<Form.Group>
						<Form.Label>Username*</Form.Label>
						<Form.Control
							type="text"
							name="username"
							value={values.username}
							placeholder="name@example.com"
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.first_name && touched.first_name ? (
							<div>{errors.first_name}</div>
						) : null}
					</Form.Group>
					<Form.Group>
						<Form.Label>Time Zone*</Form.Label>
						<Form.Control
							as="select"
							name="timezone"
							value={values.timezone}
							placeholder="name@example.com"
							onChange={handleChange}
							onBlur={handleBlur}>
							<option>America/New_York</option>
							<option>India/Koltata</option>
						</Form.Control>
						{errors.timezone && touched.timezone ? (
							<div>{errors.timezone}</div>
						) : null}
					</Form.Group>
					<Form.Group>
						<Form.Label>Password*</Form.Label>
						<Form.Control
							type="password"
							name="password"
							value={values.password}
							placeholder="password"
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.password && touched.password ? (
							<div>{errors.password}</div>
						) : null}
					</Form.Group>
					<div className="btn-wrap mt-2 d-flex justify-content-center align-items-center">
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};
export default FanSignup;
