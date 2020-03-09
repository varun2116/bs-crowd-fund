import { Action } from '../utils/types';
import {
    SET_BUS_STOPS,
    BUS_STOPS_LISTS,
    CHANGE_ID,
} from '../containers/HomePage/HomePage.constants';
import { HomePageStore } from '../containers/HomePage/HomePage.types';
import { uniqueId } from 'lodash';

export let initialState: HomePageStore = {
    [BUS_STOPS_LISTS]: [],
    [CHANGE_ID]: '',
};

export default function homeReducer(state = initialState, action: Action) {
    switch (action.type) {
        case SET_BUS_STOPS:
            return {
                ...state,
                [BUS_STOPS_LISTS]: [...action.data],
                [CHANGE_ID]: uniqueId(),
            };

        default:
            return state;
    }
}
