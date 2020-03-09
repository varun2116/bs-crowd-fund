import { createStore } from 'redux';
import reducers from '../reducers';
import { initialState } from '../store/constants';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';

export function renderWithRedux(
    ui: React.ReactNode,
    { store = createStore(reducers, initialState) } = {},
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store,
    };
}
