import React from 'react';
import { isNil } from 'lodash';

type Props = {
    type: string;
    className?: string;
    placeholder?: string;
    pattern?: string;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: Props) {
    const { type, className, placeholder, pattern, handleChange } = props;

    /**
     * method restricts the input key based on the pattern from props
     * @param event
     */
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (!isNil(pattern)) {
            let regExp = new RegExp(pattern);
            if (!regExp.test(event.key)) {
                event.preventDefault();
            }
        }
    };

    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            onKeyPress={e => {
                handleKeyPress(e);
            }}
            onChange={e => {
                !isNil(handleChange) && handleChange(e);
            }}
        />
    );
}

export default Input;
