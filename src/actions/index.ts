import { SET_BUS_STOPS } from '../containers/HomePage/HomePage.constants';
import { BusStopsList, Action } from '../utils/types';

export const setBusStopsList = (data: BusStopsList): Action => ({
    type: SET_BUS_STOPS,
    data,
});
