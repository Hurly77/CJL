import Image from "next/image";
import React from "react";

const Card = ({ title, description, code, demo, img }) => {
  return (
    <div className="flex flex-wrap min-h-screen my-4 justify-evenly lg:mx-6">
      <div className="w-full rounded shadow h-96 lg:h-56 shadow-base-300 card lg:card-side">
        <figure className="relative w-full h-full bg-black lg:w-56">
          <div className="z-40 flex flex-col px-1 py-1 rounded lg:hidden ">
            {demo && (
              <a href={demo}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-10 h-10 rounded stroke-base-100 top-1 right-1 bg-base-content bg-opacity-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}

            {code && (
              <a href={code}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-10 h-10 rounded stroke-base-100 top-1 left-1 bg-base-content bg-opacity-20"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            )}
          </div>
          <Image alt="view sunset" layout="fill" src={img} objectFit="cover" />
        </figure>
        <div className="w-full rounded-lg lg:w-1/3 card-body">
          <h1 className="card-title">{title}</h1>
          <p className="lg:line-clamp-4 line-clamp-1">{description}</p>
          <div className="hidden lg:flex card-actions">
            {demo ? (
              <a target="_blank" rel="noreferrer" href={demo} className="btn btn-secondary btn-sm">
                Preview
              </a>
            ) : (
              <div
                className="tooltip hover:tooltip-open"
                data-tip="Sorry there isn't a preview for this Project."
              >
                <button
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm btn-disabled"
                >
                  Preview
                </button>
              </div>
            )}

            {code ? (
              <a target="_blank" rel="noreferrer" href={code} className="btn btn-accent btn-sm">
                Git Repo
              </a>
            ) : (
              <div
                className="tooltip bg-base-200 hover:tooltip-open"
                data-tip="Sorry, this is a private repository"
              >
                <button
                  target="_blank"
                  rel="noreferrer"
                  href={code}
                  className="btn btn-accent btn-sm btn-disabled"
                >
                  Git Repo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
