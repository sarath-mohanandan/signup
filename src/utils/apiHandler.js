const basePath = "https://apidev.fanconvo.com/api/v3";

const apiHandler = ({ path, body, ...optioions }) => {
	return fetch(`${basePath}${path}`, {
		body: body ? JSON.stringify(body) : null,
		headers: {
			"Content-Type": "application/json",
		},
		...optioions,
	})
		.then((response) => {
			return response.json();
		})
		.catch((error) => {
			return error;
		});
};

export default apiHandler;
