import { get, isEmpty, map, uniqueId } from 'lodash';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { BusStopsList, Funders } from '../../utils/types';
import { listSearch } from '../../utils/utility-functions';
import './styles.css';

type DetailsPageProps = {
    location: { state?: { name: string } };
    busStops: BusStopsList;
};

type DetailsPageState = {
    name: string;
    title: string;
    goalAmount: number;
    amountReceived: number;
    funders: Funders;
    redirect: boolean;
};

class DetailsPage extends Component<DetailsPageProps, DetailsPageState> {
    constructor(props: DetailsPageProps) {
        super(props);
        this.state = {
            name: '',
            title: '',
            goalAmount: 0,
            amountReceived: 0,
            funders: [],
            redirect: false,
        };
    }

    componentDidMount() {
        const { busStops, location } = this.props;
        const name = get(location, ['state', 'name'], '');
        if (!isEmpty(name)) {
            const details = listSearch(busStops, name);
            this.setState({
                ...details,
            } as DetailsPageState);
        } else {
            this.setState({
                redirect: true,
            } as DetailsPageState);
        }
    }

    render() {
        const {
            amountReceived,
            funders,
            goalAmount,
            title,
            name,
            redirect,
        } = this.state;
        if (redirect) {
            return <Redirect to="/" />;
        }
        return (
            <React.Fragment>
                <Header noSearch />
                <Box>
                    <span className="title">{title}</span>
                    <div className="details">
                        <div className="goal-details">
                            <span>
                                Total Goal Amount:{' '}
                                <span className="legend">${goalAmount}</span>
                            </span>
                            <span>
                                Amount Received:{' '}
                                <span className="legend">
                                    ${amountReceived}
                                </span>
                            </span>
                            <div className="funders">
                                <span>Received Funding From:</span>
                                {map(funders, ({ name, email, funded }) => (
                                    <span key={uniqueId('funder-')}>
                                        {name} {email} funded ${funded}{' '}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <Link
                            to={{
                                pathname: '/payment',
                                state: {
                                    name,
                                },
                            }}
                        >
                            <Button type="success" name="Click To Fund" />
                        </Link>
                    </div>
                </Box>
            </React.Fragment>
        );
    }
}

export default DetailsPage;
