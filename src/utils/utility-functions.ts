import { round } from 'lodash';

export const calculatePercentage = (
    receivedAmt: number,
    goalAmt: number,
): number => {
    return round((receivedAmt / goalAmt) * 100);
};
