import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { ModalFooter } from '..';
import Button from '../../Button';

describe('ModalFooter Component Test cases', () => {
    let getByText: Function;
    const btnClick = jest.fn();
    beforeEach(() => {
        ({ getByText } = render(
            <ModalFooter>
                <Button type="cancel" name="Close" handleClick={btnClick} />
                <Button type="success" name="Save" handleClick={btnClick} />
            </ModalFooter>,
        ));
    });
    test('should render properly', () => {
        const footerElement = getByText('Close');
        expect(footerElement).toBeInTheDocument();
    });

    test('should call btnClick on click of Save button', () => {
        const saveButton = getByText('Save');
        userEvent.click(saveButton);
        expect(btnClick).toHaveBeenCalled();
    });
});
