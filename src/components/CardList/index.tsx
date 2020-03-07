import { map, uniqueId } from 'lodash';
import React from 'react';
import Card from '../Card';
import { CardListProps } from './types';

function CardList(props: CardListProps) {
    const { cards } = props;
    return (
        <div className="container">
            {map(cards, cardItem => (
                <Card key={uniqueId('card-')} {...cardItem} />
            ))}
        </div>
    );
}

CardList.defaultProps = {
    cards: [
        { title: 'Bus Stop1', goalAmount: 700, amountReceived: 300 },
        { title: 'Bus Stop2', goalAmount: 700, amountReceived: 500 },
        { title: 'Bus Stop3', goalAmount: 700, amountReceived: 700 },
        { title: 'Bus Stop4', goalAmount: 700, amountReceived: 1300 },
        { title: 'Bus Stop5', goalAmount: 700, amountReceived: 1000 },
        { title: 'Bus Stop6', goalAmount: 700, amountReceived: 800 },
        { title: 'Bus Stop7', goalAmount: 700, amountReceived: 100 },
        { title: 'Bus Stop8', goalAmount: 700, amountReceived: 0 },
    ],
};

export default CardList;
