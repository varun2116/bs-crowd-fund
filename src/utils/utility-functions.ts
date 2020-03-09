import { round, isNil, find, isEqual } from 'lodash';
import { BusStopsList } from './types';

export const calculatePercentage = (
    receivedAmt: number,
    goalAmt: number,
): number => {
    return round((receivedAmt / goalAmt) * 100);
};

/**
 * Method sets localStorage val
 * @param busStopsList
 */
export const setLocalStorageData = (busStopsList: BusStopsList) => {
    localStorage.setItem('busStopsList', JSON.stringify(busStopsList));
};

/**
 * Method returns localStorage busStopsList
 */
export const getLocalStorageData = () => {
    let val = localStorage.getItem('busStopsList');
    return !isNil(val) ? JSON.parse(val) : false;
};

export const listSearch = (busStopsList: BusStopsList, name: string) => {
    return find(busStopsList, ({ name: listName }) => isEqual(listName, name));
};
