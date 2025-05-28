const Button = ({ className, functionOnClick, title }) => {
  return (
    <>
      <button className={className} onClick={functionOnClick}>
        {title}
      </button>
    </>
  );
};

export default Button;
