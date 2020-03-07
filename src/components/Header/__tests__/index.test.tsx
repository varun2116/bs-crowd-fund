import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '..';
import { HashRouter as Router } from 'react-router-dom';
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
