export const DropDown = ({ name, children }) => {
  return (
    <div className="dropdown lg:dropdown-end">
      <div tabIndex="0" className="text-base-content btn btn-sm btn-ghost rounded-btn">
        {name}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 pl-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <ul
        tabIndex="0"
        className="z-30 p-2 shadow menu dropdown-content bg-base-100 text-base-content rounded-box w-52"
      >
        {children}
      </ul>
    </div>
  );
};

export default DropDown;
