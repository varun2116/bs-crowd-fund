import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from '..';

describe('Button Component Test Cases', () => {
    test('should render properly', () => {
        const { getByText } = render(<Button type="primary" name="Click" />);
        const buttonElement = getByText('Click');
        expect(buttonElement).toBeInTheDocument();
    });

    test('should class name contain "primary"', () => {
        const { getByText } = render(<Button type="primary" name="Click" />);
        const buttonElement = getByText('Click');
        expect(buttonElement).toHaveClass('button-primary');
    });

    test('should class name contain "className" prop', () => {
        const { getByText } = render(
            <Button type="primary" className="btn-close" name="Click" />,
        );
        const buttonElement = getByText('Click');
        expect(buttonElement).toHaveClass('btn-close');
    });

    test('should class name contain "outline" prop', () => {
        const { getByText } = render(
            <Button type="primary" outline name="Click" />,
        );
        const buttonElement = getByText('Click');
        expect(buttonElement).toHaveClass('button-outline-primary');
    });

    test('should call "handleClick" method on button click', () => {
        const ButtonProps = {
            type: 'primary',
            name: 'Click',
            handleClick: jest.fn(),
        };
        const { getByText } = render(<Button {...ButtonProps} />);
        const buttonElement = getByText('Click');
        fireEvent.click(buttonElement);
        expect(ButtonProps.handleClick).toHaveBeenCalled();
    });
});
