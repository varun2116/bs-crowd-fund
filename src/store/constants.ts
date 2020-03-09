import {
    BUS_STOPS_LISTS,
    CHANGE_ID,
    HOME_REDUCER,
} from '../containers/HomePage/HomePage.constants';

export const initialState = {
    [HOME_REDUCER]: {
        [BUS_STOPS_LISTS]: [],
        [CHANGE_ID]: '',
    },
};
