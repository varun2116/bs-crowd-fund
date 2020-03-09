import {
    filter,
    get,
    includes,
    isEmpty,
    isEqual,
    isNil,
    toLower,
} from 'lodash';
import React, { Component } from 'react';
import CardList from '../../components/CardList';
import Header from '../../components/Header';
import { httpServices } from '../../utils/http-services';
import { BusStopDetails } from '../../utils/types';
import {
    getLocalStorageData,
    setLocalStorageData,
} from '../../utils/utility-functions';
import { CHANGE_ID } from './HomePage.constants';
import { HomePageProps, HomePageState } from './HomePage.types';

class HomePage extends Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps) {
        super(props);
        this.state = {
            busStops: get(props, 'busStops', []),
            [CHANGE_ID]: get(props, CHANGE_ID, ''),
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.searchBusStops = this.searchBusStops.bind(this);
    }

    componentDidMount() {
        if (!getLocalStorageData()) {
            httpServices
                .getAllStops()
                .then((response: any) => {
                    this.props.setBusStopsList(response.data);
                    setLocalStorageData(response.data);
                })
                .catch(err => {});
        } else {
            this.props.setBusStopsList(getLocalStorageData());
        }
    }

    static getDerivedStateFromProps(
        props: HomePageProps,
        state: HomePageState,
    ) {
        if (!isEqual(get(props, [CHANGE_ID]), get(state, [CHANGE_ID], ''))) {
            return {
                ...state,
                busStops: [...props.busStops],
                [CHANGE_ID]: get(props, [CHANGE_ID]),
            };
        }
        return null;
    }

    searchBusStops(strVal: string = '') {
        if (!isNil(strVal) && !isEmpty(strVal)) {
            let searchData = filter(
                this.props.busStops,
                (busStop: BusStopDetails) => {
                    return includes(toLower(get(busStop, 'title', '')), strVal);
                },
            );
            if (!isNil(searchData)) {
                this.setState({
                    busStops: searchData,
                } as HomePageState);
            }
        } else {
            this.setState({
                busStops: this.props.busStops,
            } as HomePageState);
        }
    }

    handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = event.target;
        this.searchBusStops(value);
    }

    render() {
        const { busStops } = this.state;
        return (
            <React.Fragment>
                <Header
                    onSearchClose={() => this.searchBusStops()}
                    onSearchChange={e => this.handleSearch(e)}
                />

                {!isEmpty(busStops) ? (
                    <CardList cards={busStops} />
                ) : (
                    <h5>No Results Found !</h5>
                )}
            </React.Fragment>
        );
    }
}

export default HomePage;
