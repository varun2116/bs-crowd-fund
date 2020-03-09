import { busStopsList } from '../utils/constants';
import {
    BUS_STOPS_LISTS,
    HOME_REDUCER,
    CHANGE_ID,
} from '../containers/HomePage/HomePage.constants';

export const initialState = {
    [HOME_REDUCER]: {
        [BUS_STOPS_LISTS]: [],
        [CHANGE_ID]: '',
    },
};
