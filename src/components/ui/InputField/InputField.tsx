import React, { FC } from 'react';

interface InputFieldProps {
    value?: string | undefined,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputField: FC<InputFieldProps> = ({ value, onChange, placeholder }) => {
    return (
        <input 
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}