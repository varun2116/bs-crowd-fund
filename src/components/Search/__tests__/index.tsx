import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Search from '..';

describe('Header Component Test cases', () => {
    test('should render properly', () => {
        const { container, getByText } = render(<Search />);
        expect(container).toBeInTheDocument();
    });

    test('should call closeClick on click of search close button', () => {
        const closeClick = jest.fn();
        const { getByText } = render(<Search closeClick={closeClick} />);

        const closeBtn = getByText('x');
        fireEvent.click(closeBtn);
        expect(closeClick).toHaveBeenCalled();
    });
});
