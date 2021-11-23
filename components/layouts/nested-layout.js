import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import NestedNavHead from './heads';

const Spinner = styled.div.attrs({ className: '' })`
	width: 40px;
	height: 40px;
	margin: 100px auto;
	background-color: black;

	border-radius: 100%;
	-webkit-animation: sk-scaleout 1s infinite ease-in-out;
	animation: sk-scaleout 1s infinite ease-in-out;

	@-webkit-keyframes sk-scaleout {
		0% {
			-webkit-transform: scale(0);
		}
		100% {
			-webkit-transform: scale(1);
			opacity: 0;
		}
	}

	@keyframes sk-scaleout {
		0% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
			opacity: 0;
		}
	}
`;

const NestedLayout = ({ children }) => {
	const router = useRouter();
	const [isAnimating, setIsAnimating] = useState();

	useEffect(() => {
		const handleStart = (url) => {
			setIsAnimating(true);
		};
		const handleStop = () => {
			setIsAnimating(false);
		};

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleStop);
		router.events.on('routeChangeError', handleStop);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleStop);
			router.events.off('routeChangeError', handleStop);
		};
	}, [router, isAnimating, setIsAnimating]);

	const tabs = [
		{ id: 0, title: 'Vanilla', href: '/projects/vanilla' },
		{ id: 1, title: 'React', href: '/projects/react-and-next' },
		{ id: 2, title: 'Python', href: '/projects/python' },
		{ id: 3, title: 'C', href: '/projects/c-programming' },
		{ id: 4, title: 'APIs', href: '/projects/node-and-apis' },
	];
	return (
		<div className='w-full mb-10 space-y-10'>
			<NestedNavHead tabs={tabs}>
				<div className='w-full p-3 px-5 shadow min-h-3/4 bg-base-100'>
					{isAnimating ? <Spinner /> : children}
				</div>
			</NestedNavHead>
		</div>
	);
};

//adjusted tab width for github view
export default NestedLayout;
