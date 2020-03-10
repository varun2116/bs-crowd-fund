import {
    BUS_STOPS_LISTS,
    CHANGE_ID,
    HOME_REDUCER,
} from '../containers/HomePage/HomePage.constants';
import { BusStopsList } from '../utils/types';

export const initialState: InitialState = {
    [HOME_REDUCER]: {
        [BUS_STOPS_LISTS]: [],
        [CHANGE_ID]: '',
    },
};

export type InitialState = {
    home: {
        busStopsLists: BusStopsList;
        change_id: string;
    };
};
