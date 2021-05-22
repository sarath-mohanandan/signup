import * as Yup from "yup";

export const loginValidationSchema = () => {
	return Yup.object().shape({
		first_name: Yup.string().required("First Name  is mandatory"),
		last_name: Yup.string().required("Last Name  is mandatory"),
		username: Yup.string().required("User Name  is mandatory"),
		email: Yup.string()
			.required("Email is mandatory")
			.email("Invalid email"),
		password: Yup.string().required("Password  is mandatory"),
		timezone: Yup.string().required("Time zone  is mandatory"),
	});
};
