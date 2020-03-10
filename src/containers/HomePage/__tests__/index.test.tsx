import React from 'react';
import HomePage from '..';
import {
    initialStateWithList,
    renderWithRouterRedux,
    emptyInitialState,
} from '../../../utils/test-utils';
import { busStopsList } from '../../../utils/constants';
import { fireEvent } from '@testing-library/react';
import { SEARCH_BUTTON } from '../../../components/Header/constants';
import userEvent from '@testing-library/user-event';

describe('Testing HomePage', () => {
    test('renders properly with initial state', () => {
        const { container } = renderWithRouterRedux(<HomePage />, {
            initialState: initialStateWithList,
        });
        const containers = container.getElementsByClassName('card-container');
        expect(containers).toHaveLength(busStopsList.length);
    });
    test('renders properly with empty initial state', () => {
        const { container } = renderWithRouterRedux(<HomePage />, {
            initialState: emptyInitialState,
        });
        const containers = container.getElementsByClassName('card-container');
        expect(containers).toHaveLength(busStopsList.length);
    });

    test('should get cards on search change', () => {
        const {
            container,
            getByText,
            getByPlaceholderText,
        } = renderWithRouterRedux(<HomePage />, {
            initialState: emptyInitialState,
        });
        const btnElement = getByText(SEARCH_BUTTON);
        fireEvent.click(btnElement);
        const inputSearch = getByPlaceholderText('Search for Bus Stops');
        fireEvent.change(inputSearch, { target: { value: 'vic' } });
        const containers = container.getElementsByClassName('card-container');
        expect(containers).not.toHaveLength(busStopsList.length);
    });

    test('should get cards on search change to empty display all stops from earlier', () => {
        const {
            container,
            getByText,
            getByPlaceholderText,
        } = renderWithRouterRedux(<HomePage />, {
            initialState: emptyInitialState,
        });
        const btnElement = getByText(SEARCH_BUTTON);
        fireEvent.click(btnElement);
        const inputSearch = getByPlaceholderText('Search for Bus Stops');
        fireEvent.change(inputSearch, { target: { value: '' } });
        const containers = container.getElementsByClassName('card-container');
        expect(containers).toHaveLength(busStopsList.length);
    });

    test('should get cards on search bar close display all stops from earlier', () => {
        const { container, getByText } = renderWithRouterRedux(<HomePage />, {
            initialState: emptyInitialState,
        });
        const btnElement = getByText(SEARCH_BUTTON);
        fireEvent.click(btnElement);
        const closeBtnElement = getByText('x');
        fireEvent.click(closeBtnElement);
        const containers = container.getElementsByClassName('card-container');
        expect(containers).toHaveLength(busStopsList.length);
    });

    test('should redirect to Details Page on Click of readmore', () => {
        const {
            container,
            getByText,
            getByPlaceholderText,
            history,
        } = renderWithRouterRedux(<HomePage />, {
            initialState: emptyInitialState,
        });
        const btnElement = getByText(SEARCH_BUTTON);
        fireEvent.click(btnElement);
        const inputSearch = getByPlaceholderText('Search for Bus Stops');
        fireEvent.change(inputSearch, { target: { value: 'orc' } });

        const readMoreBtnElement = getByText('Read More...');
        fireEvent.click(readMoreBtnElement);
        expect(history.location.pathname).toEqual('/details');
    });
});
