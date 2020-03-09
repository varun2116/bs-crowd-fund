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

    test('should call onSearchChange on change input', () => {
        const closeClick = jest.fn();
        const onSearchChange = jest.fn();
        const { getByPlaceholderText } = render(
            <Search closeClick={closeClick} onSearchChange={onSearchChange} />,
        );

        const inputSearch = getByPlaceholderText('Search for Bus Stops');
        fireEvent.change(inputSearch, { target: { value: 'vic' } });
        expect(onSearchChange).toHaveBeenCalled();
    });
});
