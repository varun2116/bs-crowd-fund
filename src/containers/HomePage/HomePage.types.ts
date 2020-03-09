import { BusStopsList } from '../../utils/types';
import { CHANGE_ID, BUS_STOPS_LISTS } from './HomePage.constants';

export type HomePageStore = {
    [BUS_STOPS_LISTS]?: BusStopsList;
    [CHANGE_ID]?: string;
};

export type HomePageProps = {
    busStops: BusStopsList;
    setBusStopsList: (data: BusStopsList) => void;
};

export type HomePageState = {
    busStops: BusStopsList;
    [CHANGE_ID]: string;
};
