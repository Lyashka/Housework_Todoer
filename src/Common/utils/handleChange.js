export const handleChange = (e, component) => {
	const { name, value } = e.target;
	component.setState({ [name]: value });
};
