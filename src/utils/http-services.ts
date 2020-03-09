import { busStopsList } from './constants';
import { DonationDetails, BusStopsList } from './types';
import { getLocalStorageData, setLocalStorageData } from './utility-functions';
import { isEmpty, map, isEqual } from 'lodash';

class HTTPServices {
    getAllStops() {
        return new Promise((resolve, reject) => {
            try {
                resolve({
                    status: 200,
                    data: [...busStopsList],
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    addDonation(donationDetails: DonationDetails) {
        return new Promise((resolve, reject) => {
            try {
                const {
                    stopName,
                    amount,
                    funderName,
                    funderEmail,
                } = donationDetails;
                const busStopsList: BusStopsList = getLocalStorageData();
                let isUpdated = false;
                let newList: BusStopsList;
                if (busStopsList && !isEmpty(busStopsList)) {
                    newList = map(busStopsList, stop => {
                        let { name, amountReceived, funders } = stop;
                        if (isEqual(name, stopName)) {
                            amountReceived += amount;
                            funders.push({
                                name: funderName,
                                email: funderEmail,
                                funded: amount,
                            });
                            isUpdated = true;
                            return { ...stop, amountReceived, funders };
                        }
                        return stop;
                    });
                    setLocalStorageData(newList);
                }
                if (isUpdated) {
                    resolve({
                        status: 200,
                    });
                } else {
                    reject({ status: 500 });
                }
            } catch (error) {
                reject(error);
            }
        });
    }
}

export const httpServices = new HTTPServices();
