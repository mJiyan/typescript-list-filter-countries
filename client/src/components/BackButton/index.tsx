import React from 'react';
import { useHistory } from 'react-router-dom'


const BackButton = () => {
  const history = useHistory();

  return (
    <div
      className="
        xl:pt-10  lg:pt-10  md:pt-10  sm:pt-5  xs:pt-5  
    "
    >
      <button
        className="flex flex-row items-center rounded bg-WhiteDark dark:bg-DarkBlue text-sm shadow-lg relative
        xl:h-10  lg:h-10  md:h-10  sm:h-8  xs:h-8
        xl:px-10  lg:px-10  md:px-10  sm:px-4  xs:px-4
        xl:mt-0 lg:mt-0 md:mt-0 sm:mt-5 xs:mt-5
      "
        onClick={() =>history.goBack()}
        data-testid="back-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <p className="px-2">Back</p>
      </button>
    </div>
  );
};

export default BackButton;
