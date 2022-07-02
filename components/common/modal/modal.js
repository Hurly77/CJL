import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, selector, open, setOpen }) => {
  const [isDoc, setIsDoc] = useState(false);

  useEffect(() => {
    setIsDoc(true);
    setOpen(false);
    return () => setOpen(true);
  }, [selector, setOpen]);

  if (isDoc && open) {
    const portal = document.querySelector(selector);
    portal.className = "absolute top-0 z-50 h-full rounded-lg shadow bg-base-200 drawer ";

    return createPortal(children, portal);
  } else {
    return null;
  }
};

export default Modal;
