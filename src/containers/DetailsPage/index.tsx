import { get } from 'lodash';
import { connect } from 'react-redux';
import { Store } from '../../utils/types';
import {
    BUS_STOPS_LISTS,
    CHANGE_ID,
    HOME_REDUCER,
} from '../HomePage/HomePage.constants';
import DetailsPage from './DetailsPage';

export const mapStateToProps = (store: Store) => {
    const homeStore = get(store, HOME_REDUCER);
    return {
        busStops: get(homeStore, [BUS_STOPS_LISTS], []),
        [CHANGE_ID]: get(homeStore, [CHANGE_ID], ''),
    };
};

export default connect(mapStateToProps, {})(DetailsPage);
