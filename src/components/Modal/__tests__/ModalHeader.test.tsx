import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { ModalHeader } from '..';

describe('ModalHeader Component Test cases', () => {
    test('should render properly', () => {
        const { getByText } = render(<ModalHeader title="Example Title" />);
        const headerElement = getByText('Example Title');
        expect(headerElement).toBeInTheDocument();
    });
});
