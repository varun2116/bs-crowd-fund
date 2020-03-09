import { get } from 'lodash';
import { connect } from 'react-redux';
import { Store, BusStopsList } from '../../utils/types';
import {
    BUS_STOPS_LISTS,
    CHANGE_ID,
    HOME_REDUCER,
} from '../HomePage/HomePage.constants';
import PaymentPage from './PaymentPage';
import { setBusStopsList } from '../../actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
