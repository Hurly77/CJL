import Image from 'next/image';

const About = () => {
	return (
		<div className='relative z-10 min-h-screen space-y-10'>
			<h1 className='text-3xl font-medium text-center '>About Me</h1>
			<section className='overflow-hidden rounded-lg'>
				<article className='relative flex flex-wrap-reverse lg:justify-between even:flex-row-reverse'>
					<div className='flex items-center w-full py-12 lg:w-1/2 sm:py-24 lg:py-48 lg:items-center'>
						<div className='max-w-lg mx-auto text-center lg:text-left'>
							<h2 className='text-2xl font-medium sm:text-3xl text-base-content'>
								Hi, I&apos;m
							</h2>
							<h2 className='text-2xl font-medium sm:text-3xl text-base-content'>
								Cameron J. Leverett.
							</h2>

							<p className='inline-block mt-4 text-base-content '>
								I&apos;m a full-stack Web developer and Software Engineer. I
								currently teach Javascript at Beach Coders as a Front-End Lead
								Instructor. My goal is to contribute meaningful work to a
								company pushing the envelope, so to speak. My Ideal company
								would be less focused on making money and, instead, creating a
								genuine difference.
							</p>
						</div>
					</div>
					<div className='relative self-center w-full h-96 lg:w-1/3'>
						<Image
							src='/images/me.png'
							className='bg-neutral mask mask-circle'
							alt='Illustration of Cameron J. Leverett'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</article>

				<article className='relative flex flex-wrap-reverse even:flex-row-reverse'>
					<div className='flex items-center w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-24 lg:py-48 lg:items-center'>
						<div className='max-w-lg mx-auto text-center lg:text-left'>
							<h2 className='text-2xl font-medium sm:text-3xl'>
								What you Should Know about me?
							</h2>

							<p className='mt-4 text-base-content'>
								I like Electronics, Robotics Computers Games if it has anything
								to do with a program, thats my Jam
							</p>
						</div>
					</div>

					<div className='relative self-center w-full h-96 lg:w-1/2'>
						<Image
							src='/images/robo.svg'
							alt='Computer programming and robotics'
							className='absolute inset-0 object-cover w-full h-full'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</article>
			</section>
		</div>
	);
};

export default About;
