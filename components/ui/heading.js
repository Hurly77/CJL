import styled from 'styled-components';

const Wrapper = styled.div.attrs({
	className: 'relative  z-50 ',
})`
	color: ${(props) => props.color};
`;

const Intro = styled.span.attrs({ className: 'text-4xl' })``;

const Title = styled.h1.attrs({ className: 'font-teko text-6xl lg:text-8xl' })``;

const Sub = styled.span.attrs({ className: 'text-3xl opacity-50 font-teko' })``;

const Heading = ({ intro, title, sub, color = 'black', children }) => {
	return (
		<Wrapper color={color}>
			<Intro>{intro}</Intro>
			<Title>{title}</Title>
			<Sub>{sub}</Sub>
			<br />
			{children}
		</Wrapper>
	);
};

export default Heading;
