import React from 'react';
import './styles.css';
import Button from '../Button';
import { isNil } from 'lodash';

type Props = {
    children: React.ReactNode;
};

function ModalBody(props: Props) {
    const { children } = props;
    return <div className="modal-body">{children}</div>;
}

export default ModalBody;
