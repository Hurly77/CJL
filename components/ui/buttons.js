import styled from 'styled-components';

const Button = styled.button.attrs({
	className: 'flex btn btn-primary',
})``;

export const InfoButton = ({ name, func = null }) => {
	if (func !== 'null') {
		return <Button onClick={func}>{name}</Button>;
	}
	return <Button>{name}</Button>;
};

export default Button;
