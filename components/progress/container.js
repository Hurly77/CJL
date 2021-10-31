export const Container = ({ animationDuration, children, isFinished }) => {
	return (
		<div style={{ opacity: isFinished ? 0 : 1 }} className='mx-2'>
			{children}
		</div>
	);
};
