import style from './input.module.css';

const Input = ({
  text,
  type,
  iconWidth = '2rem',
  error,
  helperText,
  startIcon: StartIcon,
  endIcon: EndIcon,
  fullWidth,
  multiline,
  ...props
}) => {
  const labelClass = style['inputLabel'];
  const inputClass = style['input'];
  const inputContainer = style['inputContainer'];

if(multiline){
  return(
    <div>
        <textarea name="Text">{text}</textarea>
    </div>
  )
}

  return (
    <label className={`${labelClass} ${error && style['inputLabelError']}`}>
      {text && <span>{text}</span>}
      <div className={`${inputContainer}`}>
        {StartIcon && (
        <span className={style.startIcon}> 
          <StartIcon  width={iconWidth} />
          </span>
        )}
        {EndIcon && <EndIcon className={style.endIcon} width={iconWidth} />}
        <input
          className={`${inputClass} ${error ? style['inputError'] : ''}`}
          {...props}
        />
      </div>
      {helperText && (
        <span
          className={`${style['helperTextDefault']} ${
            error && style['helperTextError']
          }`}
        >
          {helperText}
        </span>
      )}
    </label>
  );
};

export default Input;
