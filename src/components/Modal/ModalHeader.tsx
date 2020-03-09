import React from 'react';
import './styles.css';

type Props = {
    title: string;
};

function ModalHeader(props: Props) {
    const { title } = props;
    return (
        <div className="modal-header">
            <span className="modal-title">{title}</span>
        </div>
    );
}

export default ModalHeader;
