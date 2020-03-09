import React from 'react';
import './styles.css';

type Props = {
    className?: string;
    children?: React.ReactNode;
};

function Modal(props: Props) {
    const { className, children } = props;
    return (
        <div className="modal" id="basicExampleModal">
            <div className="modal-dialog" role="document">
                <div className={`modal-content ${className}`}>{children}</div>
            </div>
        </div>
    );
}

export default Modal;
