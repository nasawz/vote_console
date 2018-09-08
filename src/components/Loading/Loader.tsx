import * as React from 'react';
import './loader.scss';

interface LoaderProps {}

const Loader: React.SFC<LoaderProps> = (props) => {
  return (
    <svg
      className="spinner"
      width="60px"
      height="60px"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="path"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        cx="30"
        cy="30"
        r="28"
      />
    </svg>
  );
};

export default Loader;
