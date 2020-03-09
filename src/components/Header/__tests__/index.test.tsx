import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from '..';
import { LOGO_TEXT, SEARCH_BUTTON } from '../constants';

describe('Header Component Test cases', () => {
    let container: HTMLElement, getByText: Function;
    beforeEach(() => {
        ({ container, getByText } = render(
            <Router>
                <Header />
            </Router>,
        ));
    });
    test('should render properly', () => {
        expect(container).toBeInTheDocument();
    });

    test('should contain Logo', () => {
        const logoElement = getByText(LOGO_TEXT);
        expect(logoElement).toBeInTheDocument();
    });

    test('should contain Search button', () => {
        const btnElement = getByText(SEARCH_BUTTON);
        expect(btnElement).toBeInTheDocument();
    });

    test('should display search section on click of search button', () => {
        const btnElement = getByText(SEARCH_BUTTON);
        fireEvent.click(btnElement);
        const searchBar = container.getElementsByClassName('search-bar');
        expect(searchBar).toHaveLength(1);
    });

    test('should display header section on click of search close button', () => {
        const btnElement = getByText(SEARCH_BUTTON);
        fireEvent.click(btnElement);
        const closeBtnElement = getByText('x');
        fireEvent.click(closeBtnElement);
        const logoElement = getByText(LOGO_TEXT);
        expect(logoElement).toBeInTheDocument();
    });
});

describe('Header Component Test cases with props', () => {
    test('should not display search button on "noSearch" prop', () => {
        const { container } = render(
            <Router>
                <Header noSearch />
            </Router>,
        );
        const btnElement = container.getElementsByTagName('button')[0];
        expect(btnElement).toBeUndefined();
    });

    test('should call onSearchChange on Search bar input change event', () => {
        const onSearchChange = jest.fn();
        const { getByText, getByPlaceholderText } = render(
            <Router>
                <Header onSearchChange={onSearchChange} />
            </Router>,
        );
        const btnElement = getByText(SEARCH_BUTTON);
        fireEvent.click(btnElement);
        const inputSearch = getByPlaceholderText('Search for Bus Stops');
        fireEvent.change(inputSearch, { target: { value: 'vic' } });
        expect(onSearchChange).toHaveBeenCalled();
    });

    test('should call onSearchClose on Search bar input change event', () => {
        const onSearchClose = jest.fn();
        const { getByText } = render(
            <Router>
                <Header onSearchClose={onSearchClose} />
            </Router>,
        );
        const btnElement = getByText(SEARCH_BUTTON);
        fireEvent.click(btnElement);
        const closeBtnElement = getByText('x');
        fireEvent.click(closeBtnElement);
        expect(onSearchClose).toHaveBeenCalled();
    });
});
