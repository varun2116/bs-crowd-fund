import React from 'react';
import App from '..';
import {
    initialStateWithList,
    renderWithRouterRedux,
} from '../../../utils/test-utils';
import PaymentPage from '..';
import { fireEvent, wait } from '@testing-library/react';
import { httpServices } from '../../../utils/http-services';
import { busStopsList } from '../../../utils/constants';

jest.unmock('../../../utils/utility-functions');

const localStorage = require.requireActual('../../../utils/utility-functions');

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
    test('should validate form on Submit', () => {
        const {
            container,
            getByText,
            getByPlaceholderText,
        } = renderWithRouterRedux(<PaymentPage {...props} />, {
            initialState: initialStateWithList,
        });

        const btn = getByText('Pay');
        fireEvent.click(btn);

        const name = getByPlaceholderText('Name');
        expect(name).toHaveClass('error');
    });
    test('should have Redirect', () => {
        const props = {
            location: {},
        };
        const { container, getByText, history } = renderWithRouterRedux(
            <PaymentPage {...props} />,
            {
                initialState: initialStateWithList,
            },
        );
        expect(history.location.pathname).toEqual('/');
    });
});
describe('Testing Valid Payment Success Case', () => {
    const props = {
        location: { state: { name: '01112' } },
    };
    test('should submit if form is valid on Submit', async () => {
        const {
            container,
            getByText,
            getByPlaceholderText,
            history,
        } = renderWithRouterRedux(<PaymentPage {...props} />, {
            initialState: initialStateWithList,
        });
        httpServices.addDonation = jest.fn(() =>
            Promise.resolve({ status: 200 }),
        );

        localStorage.getLocalStorageData = jest.fn(() => [...busStopsList]);

        const amount = getByPlaceholderText('Amount');
        fireEvent.change(amount, { target: { value: '100' } });

        const name = getByPlaceholderText('Name');
        fireEvent.change(name, { target: { value: 'sdfds' } });

        const card = getByPlaceholderText('Card Number');
        fireEvent.change(card, { target: { value: '1111222233334444' } });

        const cvv = getByPlaceholderText('CVV');
        fireEvent.change(cvv, { target: { value: '111' } });

        const mm = getByPlaceholderText('MM');
        fireEvent.change(mm, { target: { value: '11' } });

        const yy = getByPlaceholderText('YY');
        fireEvent.change(yy, { target: { value: '20' } });

        const btn = getByText('Pay');
        fireEvent.click(btn);

        expect(httpServices.addDonation).toHaveBeenCalled();
        await wait(
            () => expect(getByText('Payment SuccessFul')).toBeInTheDocument(),
            { timeout: 2000 },
        );

        const closeBtn = getByText('Close');
        fireEvent.click(closeBtn);
        expect(history.location.pathname).toEqual('/details');
    });
});
describe('Testing Valid Payment Failure Case', () => {
    const props = {
        location: { state: { name: '01112' } },
    };

    test('should submit if form is valid on Submit', async () => {
        const {
            container,
            getByText,
            getByPlaceholderText,
            history,
        } = renderWithRouterRedux(<PaymentPage {...props} />, {
            initialState: initialStateWithList,
        });
        httpServices.addDonation = jest.fn(() =>
            Promise.reject({ status: 500 }),
        );

        const amount = getByPlaceholderText('Amount');
        fireEvent.change(amount, { target: { value: '100' } });

        const name = getByPlaceholderText('Name');
        fireEvent.change(name, { target: { value: 'sdfds' } });

        const card = getByPlaceholderText('Card Number');
        fireEvent.change(card, { target: { value: '1111222233334444' } });

        const cvv = getByPlaceholderText('CVV');
        fireEvent.change(cvv, { target: { value: '111' } });

        const mm = getByPlaceholderText('MM');
        fireEvent.change(mm, { target: { value: '11' } });

        const yy = getByPlaceholderText('YY');
        fireEvent.change(yy, { target: { value: '20' } });

        const btn = getByText('Pay');
        fireEvent.click(btn);

        expect(httpServices.addDonation).toHaveBeenCalled();
        await wait(
            () =>
                expect(
                    getByText('Payment Failure. Please try Later'),
                ).toBeInTheDocument(),
            { timeout: 2000 },
        );

        const closeBtn = getByText('Close');
        fireEvent.click(closeBtn);
        expect(history.location.pathname).toEqual('/details');
    });
});

describe('Testing Valid Payment 500 status Case', () => {
    const props = {
        location: { state: { name: '01112' } },
    };

    test('should submit if form is valid on Submit', async () => {
        const {
            container,
            getByText,
            getByPlaceholderText,
            history,
        } = renderWithRouterRedux(<PaymentPage {...props} />, {
            initialState: initialStateWithList,
        });
        httpServices.addDonation = jest.fn(() =>
            Promise.resolve({ status: 500 }),
        );

        const amount = getByPlaceholderText('Amount');
        fireEvent.change(amount, { target: { value: '100' } });

        const name = getByPlaceholderText('Name');
        fireEvent.change(name, { target: { value: 'sdfds' } });

        const card = getByPlaceholderText('Card Number');
        fireEvent.change(card, { target: { value: '1111222233334444' } });

        const cvv = getByPlaceholderText('CVV');
        fireEvent.change(cvv, { target: { value: '111' } });

        const mm = getByPlaceholderText('MM');
        fireEvent.change(mm, { target: { value: '11' } });

        const yy = getByPlaceholderText('YY');
        fireEvent.change(yy, { target: { value: '20' } });

        const btn = getByText('Pay');
        fireEvent.click(btn);

        expect(httpServices.addDonation).toHaveBeenCalled();
        await wait(
            () =>
                expect(
                    getByText('Payment Failure. Please try Later'),
                ).toBeInTheDocument(),
            { timeout: 2000 },
        );

        const closeBtn = getByText('Close');
        fireEvent.click(closeBtn);
        expect(history.location.pathname).toEqual('/details');
    });
});
