import { isNil } from 'lodash';
import React from 'react';
import './styles.css';

type Props = {
    className?: string;
    children?: React.ReactNode;
};

function Box(props: Props) {
    const { className, children } = props;
    return (
        <div className={`box-container ${!isNil(className) ? className : ''}`}>
            {children}
        </div>
    );
}

export default Box;
