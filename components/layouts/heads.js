import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Slider = styled.span.attrs((props) => ({
	className: 'absolute tab w-1/5 h-full tab-active z-10',
}))`
	left: ${(props) => props.location}%;
	transition: left ease 500ms;
`;
const A = styled.a.attrs((props) => ({
	className: `px-3 tab w-1/5 lg:tab-lg sm:tab outline-none z-0`,
}))``;

const NestedNavHead = ({ tabs, children }) => {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState(
		tabs.find((tab) => tab.href === router.pathname),
	);

	return (
		<div className='w-full space-y-10'>
			<h1 className='text-4xl text-base-content'>On Every Page</h1>
			<div className='justify-between'>
				<div className='grid grid-cols-3 w-36'>
					<a className='cursor-pointer'>
						<svg
							id='0'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='-2 -2 24 24'
							width='50'
							fill='currentColor'
							className='w-10 fill-current lg:w-12 text-base-content'>
							<path d='M8.18 15.008c.12 0 .211-.004.271-.012a.317.317 0 0 0 .18-.107c.06-.063.09-.154.09-.274l-.004-.557c-.003-.355-.004-.637-.004-.844l-.188.033a2.41 2.41 0 0 1-.455.028 3.498 3.498 0 0 1-.57-.057 1.276 1.276 0 0 1-.548-.246 1.04 1.04 0 0 1-.36-.503l-.082-.189a2.046 2.046 0 0 0-.258-.417.989.989 0 0 0-.357-.312l-.057-.04a.602.602 0 0 1-.106-.1.455.455 0 0 1-.074-.114c-.016-.038-.003-.07.04-.094a.533.533 0 0 1 .238-.037l.164.025c.11.021.245.087.406.196.16.11.293.251.397.426.126.224.277.395.455.512a.964.964 0 0 0 .536.176c.18 0 .336-.013.467-.04a1.63 1.63 0 0 0 .369-.124c.049-.365.182-.647.4-.843a5.61 5.61 0 0 1-.839-.148 3.346 3.346 0 0 1-.77-.32 2.204 2.204 0 0 1-.66-.548c-.174-.219-.317-.505-.43-.86a4.09 4.09 0 0 1-.167-1.229c0-.66.216-1.223.647-1.687-.202-.497-.183-1.054.057-1.671.159-.05.394-.013.705.11.311.123.54.228.684.316.145.087.26.16.348.22a5.814 5.814 0 0 1 1.573-.212c.54 0 1.065.07 1.573.213l.31-.197c.214-.13.465-.251.754-.36.29-.11.511-.14.664-.09.246.617.268 1.174.065 1.67.432.465.648 1.027.648 1.688 0 .464-.056.875-.168 1.233-.112.358-.257.644-.434.86a2.29 2.29 0 0 1-.664.545 3.342 3.342 0 0 1-.77.32 5.605 5.605 0 0 1-.84.147c.284.245.426.633.426 1.163v1.957c0 .093.014.168.041.226a.226.226 0 0 0 .131.119c.06.021.114.035.16.04.047.006.113.009.2.009h-1.966-2.227z'></path>
							<path d='M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z'></path>
						</svg>
					</a>
					<a className='cursor-pointer'>
						<svg
							id='1'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='-2 -2 24 24'
							width='50'
							fill='currentColor'
							className='w-10 fill-current lg:w-12 text-base-content'>
							<path d='M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457-.592 0-.945.398-1.1.784-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066 1.41 0 2.468.922 2.468 2.902zM6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V8.38H5.127v6.447z'></path>
							<path d='M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z'></path>
						</svg>
					</a>
					<a className='cursor-pointer'>
						<svg
							id='2'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='-2 -2 24 24'
							width='50'
							fill='currentColor'
							className='w-10 fill-current lg:w-12 text-base-content'>
							<path d='M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z'></path>
							<path d='M6.186 7.632a.392.392 0 0 0-.126-.33L5.126 6.17V6h2.9l2.24 4.952L12.236 6H15v.17l-.798.77a.236.236 0 0 0-.089.226v5.668a.236.236 0 0 0 .089.225l.78.772V14H11.06v-.17l.807-.79c.08-.08.08-.103.08-.225V8.234L9.7 13.981h-.303L6.783 8.234v3.852a.534.534 0 0 0 .145.442l1.05 1.284v.17H5v-.17l1.05-1.284a.515.515 0 0 0 .136-.442V7.632z'></path>
						</svg>
					</a>
				</div>
			</div>
			<div>
				<div className='flex w-full'>
					<div className='relative flex w-full p-0 rounded-t-lg rounded-b-none tabs tabs-boxed'>
						<Slider location={activeTab.id * 20}>{activeTab.title}</Slider>
						{tabs.map((tab, id) => (
							<Link key={id} href={tab.href} passHref>
								<A onClick={() => setActiveTab(tab)}>{tab.title}</A>
							</Link>
						))}
					</div>
				</div>
				{children}
			</div>
		</div>
	);
};

export default NestedNavHead;