interface Props {
  isClick: boolean;
}

const ArrowSvg: React.FC<Props> = ({ isClick }) => {
  return (
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isClick ? (
        <path
          d="M0.406664 5C0.0433953 5 -0.138239 4.47929 0.124122 4.1716L2.70737 1.14201C2.86882 0.952663 3.13118 0.952663 3.29263 1.14201L5.87588 4.1716C6.13824 4.47929 5.9566 5 5.59334 5H0.406664Z"
          fill="white"
        ></path>
      ) : (
        <path
          d="M5.59334 1C5.9566 1 6.13824 1.52071 5.87588 1.8284L3.29263 4.85799C3.13118 5.04734 2.86882 5.04734 2.70737 4.85799L0.124121 1.8284C-0.138239 1.52071 0.043395 1 0.406664 1H5.59334Z"
          fill="white"
        ></path>
      )}
    </svg>
  );
};

export default ArrowSvg;
