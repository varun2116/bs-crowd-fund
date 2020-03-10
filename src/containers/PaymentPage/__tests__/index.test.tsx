import React from 'react';
import App from '..';
import {
    initialStateWithList,
    renderWithRouterRedux,
} from '../../../utils/test-utils';
import PaymentPage from '..';

describe('Testing Payment Page', () => {
    const props = {
        location: { state: { name: '01112' } },
    };
    test('renders Payment Page', () => {
        const { container } = renderWithRouterRedux(
            <PaymentPage {...props} />,
            {
                initialState: initialStateWithList,
            },
        );
        expect(container).toBeInTheDocument();
    });
});
