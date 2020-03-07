import React from 'react';
import './styles.css';
import ProgressBar from '../ProgressBar';
import Button from '../Button';
import { CardProps } from './types';
import { calculatePercentage } from '../../utils/utility-functions';

function Card(props: CardProps) {
    const { title, goalAmount, amountReceived } = props;
    const percentageFunded = calculatePercentage(amountReceived, goalAmount);
    return (
        <div className="card-container">
            <div className="title">{title}</div>
            <ProgressBar percentage={percentageFunded} />
            <span className="desc">{percentageFunded}% funded</span>
            <Button type="primary" name="Click Here to Fund" />
        </div>
    );
}

Card.defaultProps = {
    title: 'Bus Stop1',
    goalAmount: 700,
    amountReceived: 300,
};

export default Card;
