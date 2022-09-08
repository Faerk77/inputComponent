import style from './input.module.css';

const Input = ({
  text,
  type,
  iconWidth = "1.5rem",
  error,
  startIcon: StartIcon,
  endIcon: EndIcon,
  fullWidth,
  ...props
}) => {
  const labelClass = style['inputLabel'];
  const inputClass = style['input'];

  return (
    <label className={`${labelClass}`}>
      {text && <span>{text}</span>}
      <div>
      {StartIcon && <StartIcon className={style.startIcon} width={iconWidth}/>}
      <input className={inputClass} {...props} />
      </div>
    </label>
  );
};

export default Input;
