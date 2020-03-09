import { render } from '@testing-library/react';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Card from '..';
import { calculatePercentage } from '../../../utils/utility-functions';
import { CardProps } from './mockdata';

describe('Card Component Test cases', () => {
    let getByText: Function, container: HTMLElement;
    beforeEach(() => {
        ({ container, getByText } = render(
            <Router>
                <Card {...CardProps} />
            </Router>,
        ));
    });
    test('Card should render with title', () => {
        const titleElement = getByText(CardProps.title);
        expect(titleElement).toBeInTheDocument();
    });

    test('Card should render with description', () => {
        const percentage = calculatePercentage(
            CardProps.amountReceived,
            CardProps.goalAmount,
        );
        const descElement = getByText(`${percentage}% funded`);
        expect(descElement).toBeInTheDocument();
    });

    test('Card should render with progress bar', () => {
        const progressElement = container.getElementsByClassName(
            'progress-container',
        )[0];
        expect(progressElement).toBeInTheDocument();
    });
});
