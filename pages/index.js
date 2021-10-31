import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';

const Wrap = styled.div.attrs({
	className: 'h-screen text-white bg-indigo-800 bg-circuit',
})``;
const Gradient = styled.div.attrs({ className: 'h-screen' })`
	background: linear-gradient(-45deg, #4f46e5 40%, transparent 99%);
`;

export default function Home() {
	return (
		<>
			<Head>
				<title> I&apos;m Cameron</title>
				<meta
					name='description'
					content='Cameron John Leverett, Software engineer, web Developer full-stack'
				/>
				<link rel='icon' type='image/svg+xml' href='images/favicon.svg' />
			</Head>
			<Wrap>
				<Gradient>
					<div className='h-full hero'>
						<div className='flex items-center justify-center h-full hero-overlay '>
							<div className='flex flex-col hero-content'>
								<div className='flex flex-col text-center'>
									<h2 className='text-2xl '>Hi, I&apos;m</h2>
									<h1 className='mb-5 text-5xl font-bold'>
										Cameron J. Leverett
									</h1>
									<span className='text-3xl font-bold leading-10 opacity-70'>
										Full-Stack Developer
									</span>
								</div>
								<div className='hero-content'>
									<Link href='/projects/vanilla' passHref>
										<a className='btn btn-primary text-primary-content'>
											Projects
										</a>
									</Link>
									<Link href='/resume' passHref>
										<a className='btn btn-secondary'>Resume</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</Gradient>
			</Wrap>
		</>
	);
}
