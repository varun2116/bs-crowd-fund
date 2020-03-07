import { render } from '@testing-library/react';
import React from 'react';
import ProgressBar from '..';

describe('ProgressBar Component Test cases', () => {
    test('should render properly', () => {
        const { container } = render(<ProgressBar percentage={80} />);
        const progressElement = container.getElementsByClassName(
            'progress-container',
        )[0];
        expect(progressElement).toBeInTheDocument();
    });
});
