import { render } from '@testing-library/react';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import CardList from '..';
import { CardListMockProps } from './mockdata';

describe('CardList Component Test cases', () => {
    test('CardList should render all cards from the cards array', () => {
        const { container } = render(
            <Router>
                <CardList {...CardListMockProps} />
            </Router>,
        );
        const cards = container.getElementsByClassName('card-container');
        expect(cards).toHaveLength(CardListMockProps.cards.length);
    });
});
