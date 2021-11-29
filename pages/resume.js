import ResumeComponent from '../components/resume/index';

const Resume = () => {
	return (
		<>
			<div className='flex flex-col items-center justify-center w-full pb-10'>
				<div className="flex justify-center w-full max-w-4xl pb-5 md:justify-start">
					<a
						className='btn btn-primary'
						href='/images/Cameron-Leverett-Resume.pdf'
						download='Cameron-Leverett-Resume.pdf'>
						{' '}
						Download{' '}
					</a>
				</div>

				<ResumeComponent />
			</div>
		</>
	);
};

export default Resume;
