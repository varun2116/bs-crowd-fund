import React from 'react';
import './styles.css';
import { isNil } from 'lodash';

type Props = {
    type: string;
    name: string;
    outline?: boolean;
    className?: string;
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button(props: Props) {
    const { type, name, outline, handleClick, className } = props;

    const getClassName = () => {
        let btnClass = `button-${type}`;
        if (!isNil(outline)) {
            btnClass = `button-outline-${type}`;
        }
        if (!isNil(className)) {
            btnClass += ` ${className}`;
        }
        return `button ${btnClass}`;
    };

    return (
        <button
            className={getClassName()}
            onClick={e => {
                !isNil(handleClick) && handleClick(e);
            }}
        >
            {name}
        </button>
    );
}

Button.defaultProps = {
    type: 'default',
    name: 'Click',
};

export default Button;
