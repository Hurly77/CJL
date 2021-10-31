import styled from 'styled-components';
import Link from 'next/link';
import SliderOver from '../ui/slide-over';
import { useState } from 'react';

const links = [
	{ path: '/projects/vanilla', name: 'Projects' },
	{ path: '/resume', name: 'Resume' },
	{ path: '/about', name: 'About' },
	{ path: '/contact', name: 'Contact' },
];

const Bar = styled.div.attrs({
	className:
		'navbar 2xl:px-2xl xl:px-xl lg:px-lg md:px-md sm:px-sm px-5 bg-base-300 text-base-100 border-b border-opacity-10 border-base-content',
	hidden: true,
})``;

const NavStart = styled.div.attrs({
	className:
		'text-base-content flex-none px-2 mx-2 flex sm:navbar-start lg:flex hidden',
})``;

const NavEnd = styled.div.attrs({ className: 'lg:navbar-end navbar-start' })``;

const Navbar = ({ children }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Bar>
				<button
					className='block btn btn-sm btn-secondary lg:hidden'
					onClick={() => setOpen(!open)}>
					menu
				</button>
				<SliderOver open={open} setOpen={() => setOpen(!open)}>
					{' '}
					{links.map((link, id) => (
						<Link key={id} href={link.path} passHref>
							<a className='rounded-none border-b-base-content border-opacity-20 btn btn-sm btn-ghost h-1/5'>
								{link.name}
							</a>
						</Link>
					))}
				</SliderOver>
				<NavStart>
					{links.map((link, id) => (
						<Link key={id} href={link.path} passHref>
							<a className='m-1 btn btn-sm btn-ghost'>{link.name}</a>
						</Link>
					))}
				</NavStart>

				<NavEnd>{children}</NavEnd>
			</Bar>
		</>
	);
};

export default Navbar;
