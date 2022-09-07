import style from './input.module.css';

const Input = ({ text, type,error, ...props }) => {
  const labelClass = style['inputLabel'];
  const inputClass = style['inputClass'];

  return (
      <label className={`${labelClass}`}>
        {text}
        <input className={inputClass} {...props} />
      </label>
  );
};

export default Input;
