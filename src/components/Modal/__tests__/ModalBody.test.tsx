import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { ModalBody } from '..';

describe('ModalBody Component Test cases', () => {
    test('should render properly', () => {
        const { getByText } = render(<ModalBody>Text</ModalBody>);
        const bodyElement = getByText('Text');
        expect(bodyElement).toBeInTheDocument();
    });
});
