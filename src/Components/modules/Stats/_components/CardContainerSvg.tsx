const CardContainerSvg = ({
  color,
  className,
}: {
  color: string;
  className?: string;
}) => {
  return (
    <svg
      className={""}

      viewBox="101 101 101 101"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 698.064c100-20.5 300-100.172 500-102.502 200-2.33 300 164.876 500 90.851 200-74.024 300-385.515 500-460.974 200-75.46 400 66.941 500 83.677V1000H0Z"
        fill={color}
      />
      <path
        d="M0 698.064c100-20.5 300-100.172 500-102.502 200-2.33 300 164.876 500 90.851 200-74.024 300-385.515 500-460.974 200-75.46 400 66.941 500 83.677"
        fill="none"
      />
      <g fill={color}>
        <circle cy="698.064" r="6" />
        <circle cx="500" cy="595.562" r="6" />
        <circle cx="1000" cy="686.413" r="6" />
        <circle cx="1500" cy="225.439" r="6" />
        <circle cx="2000" cy="309.116" r="6" />
      </g>
    </svg>
  );
};

export default CardContainerSvg;
