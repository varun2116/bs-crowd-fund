import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Box from '..';

describe('Button Component Test Cases', () => {
    test('should render properly', () => {
        const { getByText } = render(
            <Box>
                <p>Inside Box</p>
            </Box>,
        );
        const paraElement = getByText('Inside Box');
        expect(paraElement).toBeInTheDocument();
    });

    test('should render properly with className', () => {
        const { container } = render(
            <Box className="test">
                <p>Inside Box</p>
            </Box>,
        );
        expect(
            container.getElementsByClassName('box-container')[0],
        ).toHaveClass('test');
    });
});
