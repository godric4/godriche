const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-2 py-2 border font-montserrat text-[1rem] leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'bg-secondary text-primary border-white border-2'
      } rounded-full ${fullWidth && 'w-full'}`}
    >
      {label} <span className='ml-2  w-5 h-5'>{iconUrl}</span>
    </button>
  );
};

export default Button;
