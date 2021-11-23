import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const PortalContent = styled.div.attrs({ className: '' })`
	&::before {
		opacity: 0;
		transition: all 500ms;
		content: ${(props) => props.children};
	}
	&::after {
		opacity: 1;
		transition: all 500ms;
		content: ${(props) => props.children};
	}
`;

const Modal = ({ children, selector, open, setOpen }) => {
	const [isDoc, setIsDoc] = useState(false);

	useEffect(() => {
		setIsDoc(true);
		setOpen(false);
		return () => setOpen(true);
	}, [selector, setOpen]);

	if (isDoc && open) {
		const portal = document.querySelector(selector);
		portal.className =
			'absolute top-0 z-50 h-full rounded-lg shadow bg-base-200 drawer ';

		return createPortal(<PortalContent>{children}</PortalContent>, portal);
	} else {
		return null;
	}
};

export default Modal;
