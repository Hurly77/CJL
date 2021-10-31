import { useRouter } from 'next/router';
import { DropDown, Footer, Navbar } from '../index';
import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change/index.js';
import Head from 'next/head';
import styled from 'styled-components';

const Main = styled.div.attrs((props) => ({
	className: '2xl:px-2xl xl:px-xl lg:px-lg md:px-md sm:px-sm px-0 h-full',
}))`
	min-height: 90vh;
	transition: all ease 500ms;
`;

const Layout = ({ children }) => {
	const router = useRouter();
	const [doc, setDoc] = useState(false);

	useEffect(() => {
		themeChange(false);
		() => setDoc(true);
	}, [router.pathname]);
	return router !== 'undefined' && router.pathname === '/' ? (
		<div>{children}</div>
	) : (
		<>
			<Head>
				<title>{router.pathname.split('/').join('').toUpperCase()}</title>
				<link rel='icon' type='image/svg+xml' href='images/favicon.svg' />
				<meta
					name='description'
					content='Cameron John Leverett, Software engineer, web Developer full-stack'
				/>
			</Head>
			<div className='bg-base-300'>
				<Navbar>
					<DropDown name='Themes'>
						{['', 'emerald', 'dark', 'forest', 'synthwave'].map((t, id) => (
							<li key={id}>
								<a
									className=''
									tabIndex='0'
									data-set-theme={t}
									data-act-class='active'>
									{t === '' ? 'Default' : t}
								</a>
							</li>
						))}
					</DropDown>
				</Navbar>
				<Main>{children}</Main>
				<Footer content='hello world' />
			</div>
		</>
	);
};

export default Layout;
