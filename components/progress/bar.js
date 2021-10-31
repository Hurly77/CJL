import styled from 'styled-components';

const Progress = styled.progress.attrs((props) => ({ className: 'progress progress-info' }))`
	width: ${(props) => props.progress * 100}%;
	transition: width ${(props) => props.time}ms;
`;

export const Bar = ({ animationDuration, progress }) => {
	return <Progress max='100' time={animationDuration} progress={progress}></Progress>;
};
