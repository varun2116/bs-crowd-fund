import { isNil } from 'lodash';
import React from 'react';

type Props = {
    type: string;
    className?: string;
    placeholder?: string;
    pattern?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
    value?: string | number;
    name?: string;
    checked?: boolean;
};

type Ref = HTMLInputElement;

const Input = React.forwardRef<Ref, Props>((props, ref) => {
    const { type, className, placeholder, pattern, onChange } = props;
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
                !isNil(onChange) && onChange(e);
            }}
            {...props}
            ref={ref}
        />
    );
});

export default Input;
