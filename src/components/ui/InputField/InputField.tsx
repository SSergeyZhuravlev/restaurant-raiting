import React, { FC } from 'react';
import './InputField.css';

interface InputFieldProps {
    value: string | undefined,
    placeholder?: string,
    inputType: 'search' | 'input'
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const InputField: FC<InputFieldProps> = ({ value, placeholder, inputType = 'input', onChange }) => {
    return (
        <label className='input-field__label'>
            {
                inputType === 'search' && (
                    <svg className='search-logo' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20.9999 21L16.6499 16.65" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> 
                )
            }
            <input 
                className={ inputType === 'search' ? 'search-field' : 'input-field' }
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </label>
    )
}