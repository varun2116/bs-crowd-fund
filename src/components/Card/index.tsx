import React from 'react';
import { Link } from 'react-router-dom';
import { calculatePercentage } from '../../utils/utility-functions';
import Button from '../Button';
import ProgressBar from '../ProgressBar';
import './styles.css';
import { CardProps } from './types';

function Card(props: CardProps) {
    const { title, goalAmount, amountReceived, name } = props;
    const percentageFunded = calculatePercentage(amountReceived, goalAmount);
    return (
        <div className="card-container">
            <div className="title">{title}</div>
            <ProgressBar percentage={percentageFunded} />
            <span className="desc">{percentageFunded}% funded</span>
            <Link
                to={{
                    pathname: '/details',
                    state: {
                        name,
                    },
                }}
            >
                <Button type="primary" name="Read More..." />
            </Link>
        </div>
    );
}

Card.defaultProps = {
    title: 'Bus Stop1',
    goalAmount: 700,
    amountReceived: 300,
};

export default Card;
