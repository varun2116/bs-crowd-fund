import React from 'react';
import './styles.css';

type Props = {
    children: React.ReactNode;
};

function ModalBody(props: Props) {
    const { children } = props;
    return <div className="modal-body">{children}</div>;
}

export default ModalBody;
