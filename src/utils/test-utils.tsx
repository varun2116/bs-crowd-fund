import { createStore, Store } from 'redux';
import reducers from '../reducers';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import {
    HOME_REDUCER,
    BUS_STOPS_LISTS,
    CHANGE_ID,
} from '../containers/HomePage/HomePage.constants';
import { busStopsList } from './constants';
import { HomePageStore } from '../containers/HomePage/HomePage.types';
import { InitialState } from '../store/constants';
import { Router } from 'react-router-dom';
import { createMemoryHistory, History } from 'history';

export const emptyInitialState: InitialState = {
    [HOME_REDUCER]: {
        [BUS_STOPS_LISTS]: [],
        [CHANGE_ID]: '',
    },
};

export const initialStateWithList: InitialState = {
    [HOME_REDUCER]: {
        [BUS_STOPS_LISTS]: [...busStopsList],
        [CHANGE_ID]: '2',
    },
};

/**
 * Testing method which gives the redux context
 * @param ui
 * @param param1
 */
export function renderWithRedux(
    ui: React.ReactNode,
    {
        initialState,
        store = createStore(reducers, initialState),
    }: { initialState?: InitialState; store?: Store } = {},
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store,
    };
}

/**
 * Testing method which gives the redux context and router context
 * @param ui
 * @param param1
 */
export function renderWithRouterRedux(
    ui: React.ReactNode,
    {
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] }),
        initialState,
        store = createStore(reducers, initialState),
    }: {
        route?: string;
        history?: History;
        initialState?: InitialState;
        store?: Store;
    } = {},
) {
    return {
        ...render(
            <Provider store={store}>
                <Router history={history}>{ui}</Router>
            </Provider>,
        ),
        // adding `history` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store,
        history,
    };
}
