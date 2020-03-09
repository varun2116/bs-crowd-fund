import { get } from 'lodash';
import { connect } from 'react-redux';
import { BusStopsList, Store } from '../../utils/types';
import HomePage from './HomePage';
import { setBusStopsList } from '../../actions';
import { BUS_STOPS_LISTS, HOME_REDUCER, CHANGE_ID } from './HomePage.constants';

export const mapStateToProps = (store: Store) => {
    const homeStore = get(store, HOME_REDUCER);
    return {
        busStops: get(homeStore, [BUS_STOPS_LISTS], []),
        [CHANGE_ID]: get(homeStore, [CHANGE_ID], ''),
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        setBusStopsList(data: BusStopsList) {
            dispatch(setBusStopsList(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
