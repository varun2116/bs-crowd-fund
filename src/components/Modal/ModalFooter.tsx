import React from 'react';
import './styles.css';

type Props = {
    children: React.ReactNode;
};

function ModalFooter(props: Props) {
    const { children } = props;
    return <div className="modal-footer">{children}</div>;
}

export default ModalFooter;
