import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { get } from 'lodash';
import React from 'react';
import DetailsPage from '..';
import { busStopsList } from '../../../utils/constants';
import {
    initialStateWithList,
    renderWithRouterRedux,
} from '../../../utils/test-utils';
import { listSearch } from '../../../utils/utility-functions';

describe('Header Component Test cases', () => {
    const props = {
        location: { state: { name: '01112' } },
    };
    test('should render properly', () => {
        const { container } = renderWithRouterRedux(<DetailsPage {...props} />);
        expect(container).toBeInTheDocument();
    });

    test('should render properly with store', () => {
        const { getByText } = renderWithRouterRedux(
            <DetailsPage {...props} />,
            { initialState: initialStateWithList },
        );
        const details = listSearch(busStopsList, '01112');
        const title = getByText(get(details, 'title', 'false'));
        expect(title).toBeInTheDocument();
    });

    test('should have goalAmount', () => {
        const { getByText } = renderWithRouterRedux(
            <DetailsPage {...props} />,
            { initialState: initialStateWithList },
        );
        const details = listSearch(busStopsList, '01112');
        const goalAmount = getByText(`$${get(details, 'goalAmount', '')}`);
        expect(goalAmount).toBeInTheDocument();
    });

    test('should have amountReceived', () => {
        const { getByText } = renderWithRouterRedux(
            <DetailsPage {...props} />,
            { initialState: initialStateWithList },
        );
        const details = listSearch(busStopsList, '01112');
        const amountReceived = getByText(
            `$${get(details, 'amountReceived', '')}`,
        );
        expect(amountReceived).toBeInTheDocument();
    });

    test('should have Redirect', () => {
        const props = {
            location: {},
        };
        const { container, getByText, history } = renderWithRouterRedux(
            <DetailsPage {...props} />,
            {
                initialState: initialStateWithList,
            },
        );
        expect(history.location.pathname).toEqual('/');
    });
});
