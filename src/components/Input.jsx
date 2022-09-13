import style from './input.module.css';

const Input = ({
  text,
  type,
  iconWidth = '1.8rem',
  error,
  helperText,
  size = 'md',
  startIcon: StartIcon,
  endIcon: EndIcon,
  fullWidth,
  multiline,
  ...props
}) => {
  const labelClass = style['inputLabel'];
  const inputClass = style['input'];
  const inputContainer = style['inputContainer'];
  const labelText = error
    ? style['inputLabelError']
    : style['inputLabelDefault'];
  const inputFullWidth = fullWidth ? style.fullWidth : '';

  const inputGap = {display: 'block', marginBottom: '0.5rem'}

  const styled = StartIcon ? { paddingLeft: `calc(1rem + ${iconWidth}`} : {};

  if (multiline) {
    return (
      <label className={`${labelClass}`}>
        {text && <span className={labelText}>{text}</span>}
        <textarea className={style.textArea} {...props} name="Text"></textarea>
      </label>
    );
  }

  return (
    <label className={`${labelClass} ${labelText} ${inputFullWidth}`}>
      {text && <span style={inputGap} className={`${labelText}`}>{text}</span>}
      <div className={`${inputContainer}`}>
        {StartIcon && (
          <StartIcon width={iconWidth} className={style.startIcon} />
        )}
        {EndIcon && <EndIcon width={iconWidth} className={style.endIcon} />}
        <input
          className={`${inputClass} ${error ? style['inputError'] : ''} ${
            style[size]
          }`}
          style={styled}
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
