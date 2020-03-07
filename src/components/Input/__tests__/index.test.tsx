import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from '..';
import { REG_EXP } from '../../../utils/constants';
import userEvent from '@testing-library/user-event';

describe('Input Component Test cases', () => {
    test('should render properly', () => {
        const { container } = render(
            <Input type="text" placeholder="Search.." />,
        );
        const InputElement = container.getElementsByTagName('input')[0];
        expect(InputElement).toBeInTheDocument();
    });

    test('should allow only input which satisfy pattern', () => {
        const { container } = render(
            <Input
                data-testid="input"
                type="text"
                placeholder="Search.."
                pattern={REG_EXP.ALPHA_NUMERIC}
            />,
        );
        const InputElement = container.getElementsByTagName('input')[0];
        userEvent.type(InputElement, 'Hello, World 99 Word!');
        expect(InputElement.value).toEqual('HelloWorld99Word');
    });
});
