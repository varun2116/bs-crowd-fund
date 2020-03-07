import React from 'react';
import { render } from '@testing-library/react';
import Card from '..';
import { calculatePercentage } from '../../../utils/utility-functions';
import { CardProps } from './mockdata';

describe('Card Component Test cases', () => {
    test('Card should render with title', () => {
        const { getByText } = render(<Card {...CardProps} />);
        const titleElement = getByText(CardProps.title);
        expect(titleElement).toBeInTheDocument();
    });

    test('Card should render with description', () => {
        const { getByText } = render(<Card {...CardProps} />);
        const percentage = calculatePercentage(
            CardProps.amountReceived,
            CardProps.goalAmount,
        );
        const descElement = getByText(`${percentage}% funded`);
        expect(descElement).toBeInTheDocument();
    });

    test('Card should render with progress bar', () => {
        const { container } = render(<Card {...CardProps} />);
        const progressElement = container.getElementsByClassName(
            'progress-container',
        )[0];
        expect(progressElement).toBeInTheDocument();
    });
});
