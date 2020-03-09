import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { renderWithRedux } from '../../../utils/test-utils';
import DetailsPage from '..';
import { busStopsList } from '../../../utils/constants';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';

describe('Header Component Test cases', () => {
    const props = {
        busStops: [...busStopsList],
        location: { state: { name: '01112' } },
    };
    test('should render properly', () => {
        const { container, getByText } = renderWithRedux(
            <Router>
                <DetailsPage {...props} />
            </Router>,
        );
        expect(container).toBeInTheDocument();
    });
});
