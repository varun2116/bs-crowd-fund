import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '..';
import Button from '../../Button';

describe('Modal Component Test cases', () => {
    let getByText: Function,
        container: HTMLElement,
        btnClick = jest.fn();
    beforeEach(() => {
        ({ container, getByText } = render(
            <Modal>
                <ModalHeader title="Modal Header" />
                <ModalBody>Text</ModalBody>
                <ModalFooter>
                    <Button type="cancel" name="Close" handleClick={btnClick} />
                    <Button
                        type="success"
                        name="Save changes"
                        handleClick={btnClick}
                    />
                </ModalFooter>
            </Modal>,
        ));
    });

    test('should contain modal header', () => {
        const headerElement = getByText('Modal Header');
        expect(headerElement).toBeInTheDocument();
    });

    test('should contain modal body', () => {
        const bodyElement = getByText('Text');
        expect(bodyElement).toBeInTheDocument();
    });
    test('should contain modal footer', () => {
        const footerElement = getByText('Close');
        expect(footerElement).toBeInTheDocument();
    });
});
