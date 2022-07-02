import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

export const SlideOver = ({ children, setOpen, open }) => {
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 overflow-hidden" onClose={setOpen}>
          <div className="absolute inset-0 overflow-hidden" onClick={setOpen}>
            <div className="fixed inset-y-0 left-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative w-screen max-w-screen">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 flex pt-5 pr-5">
                      <button
                        type="button"
                        className="rounded-md text-base-content hover:text-base-content focus:outline-none focus:ring-2 focus:ring-base-content"
                        onClick={setOpen}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-col h-full py-6 overflow-y-scroll shadow-xl bg-base-100">
                    <div className="flex flex-col h-full px-4 mx-10 sm:px-6">{children}</div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SlideOver;
