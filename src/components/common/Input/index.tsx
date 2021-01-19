import { FC , InputHTMLAttributes } from "react";
import "./index.scss";

type TProps = {
  labelText : string;
  type? : 'text' | 'password';
}

const Input : FC<TProps> = ({ labelText , type }) => (
  <div className="global-input-container">
    <label className='label-global-input' htmlFor="global-input-text">{labelText}</label>
    <input className='global-input' type={type} id='global-input-text' />
  </div>
);

Input.defaultProps = {
  type : 'text'
}

export default Input;