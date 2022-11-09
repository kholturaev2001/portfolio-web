import React from "react";

const Arrow = ({ className }) => {
  return (
    <svg
      className={className}
      width="11"
      height="7"
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.685 1.32234L6.02845 5.9789C5.7427 6.26465 5.27941 6.26465 4.99366 5.9789L0.337105 1.32234C0.0513554 1.0366 0.0513554 0.573304 0.337105 0.287554C0.622854 0.00180481 1.08615 0.00180481 1.3719 0.287554L5.08243 3.99809H5.93968L9.65022 0.287554C9.93597 0.00180481 10.3993 0.00180481 10.685 0.287554C10.9708 0.573304 10.9708 1.0366 10.685 1.32234Z"
        // fill="#0093ED"
      />
    </svg>
  );
};

export default Arrow;
