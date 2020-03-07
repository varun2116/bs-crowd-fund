import React from 'react';
import { render } from '@testing-library/react';
import CardList from '..';
import { CardListMockProps } from './mockdata';

describe('CardList Component Test cases', () => {
    test('CardList should render all cards from the cards array', () => {
        const { container } = render(<CardList {...CardListMockProps} />);
        const cards = container.getElementsByClassName('card-container');
        expect(cards).toHaveLength(CardListMockProps.cards.length);
    });
});
