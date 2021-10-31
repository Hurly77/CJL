import styled from 'styled-components';

const Div = styled.div.attrs({ className: 'z-40' })`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;
`;

const Svg = styled.svg.attrs({ className: 'z-40' })`
	position: relative;
	display: block;
	width: calc(100% + 1.3px);
	height: 500px;
	transform: rotateY(180deg);

	@media (max-width: 767px) {
		width: calc(260% + 1.3px);
		height: 371px;
	}
`;

const Tilt = () => {
	return (
		<Div>
			<Svg
				preserveAspectRatio='none'
				viewBox='0 0 1200 120'
				xmlns='http://www.w3.org/2000/svg'
				style={{
					fill: '#0092FC',
					width: '112%',
					height: 442,
					transform: 'scaleX(-1)',
				}}>
				<path d='M1200 120L0 16.48V0h1200v120z' />
				<defs>
					<linearGradient id='myGradient' gradientTransform='rotate(90)'>
						<stop offset='5%' stopColor='gold' />
						<stop offset='95%' stopColor='red' />
					</linearGradient>
				</defs>
			</Svg>
		</Div>
	);
};

export const TiltTwo = () => {
	return (
		<Div>
			<Svg
				data-name='Layer 1'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1200 120'
				preserveAspectRatio='none'>
				<defs>
					<linearGradient
						id='a'
						spreadMethod='pad'
						x1='100%'
						x2='0%'
						y1='100%'
						y2='0%'>
						<stop offset='56%' stopColor='#0092fc' />
						<stop offset='100%' stopColor='#a3d8ff' />
					</linearGradient>
				</defs>
				<path
					d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
					className='shape-fill'
					fill='url(#a)'></path>
			</Svg>
		</Div>
	);
};

export const Bar = ({ vp }) => {
	const Style = styled.div.attrs({ className: '' })`
		width: ${vp.screenWidth / 2};
		height: 20px;
		transform: translate(50px, 300px) rotate(-16deg);
		background-color: red;
	`;

	return <Style />;
};

export default Tilt;
