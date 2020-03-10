import React from 'react';
import App from '..';
import {
    initialStateWithList,
    renderWithRouterRedux,
} from '../../../utils/test-utils';

test('renders App', () => {
    const { container } = renderWithRouterRedux(<App />, {
        initialState: initialStateWithList,
    });
    expect(container.firstChild).toHaveClass('App');
});
