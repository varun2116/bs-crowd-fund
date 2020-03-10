import '@testing-library/jest-dom/extend-expect';
import { httpServices } from '../http-services';
// import * as localStorage from '../utility-functions';
// import * as constants from '../constants';

jest.unmock('../utility-functions');
jest.unmock('../constants');

const localStorage = require.requireActual('../utility-functions');
const constants = require.requireActual('../constants');

describe('HTTP Services test cases', () => {
    test("Testing 'getAllStops' service", async () => {
        const stops: any = await httpServices.getAllStops();
        expect(stops.status).toEqual(200);
    });

    test("Testing 'addDonation' service", async () => {
        const donationDetails = {
            stopName: '',
            amount: 100,
            funderName: 'test',
            funderEmail: 'test@email.com',
        };
        await expect(
            httpServices.addDonation(donationDetails),
        ).rejects.toEqual({ status: 500 });
    });
    test("Testing 'addDonation' service with name", async () => {
        localStorage.getLocalStorageData = jest.fn(() => [
            ...constants.busStopsList,
        ]);
        const donationDetails = {
            stopName: '01112',
            amount: 100,
            funderName: 'test',
            funderEmail: 'test@email.com',
        };
        await expect(
            httpServices.addDonation(donationDetails),
        ).resolves.toEqual({ status: 200 });
    });

    test("Testing 'addDonation' service without proper getLocalStorageData data", async () => {
        localStorage.getLocalStorageData = jest.fn(() => {
            throw 'error';
        });
        const donationDetails = {
            stopName: '01112',
            amount: 100,
            funderName: 'test',
            funderEmail: 'test@email.com',
        };
        await expect(httpServices.addDonation(donationDetails)).rejects.toEqual(
            'error',
        );
    });

    test("Testing 'getAllStops' service reject", async () => {
        constants.busStopsList = 45;
        await expect(httpServices.getAllStops()).rejects.toEqual(
            TypeError('_constants.busStopsList is not iterable'),
        );
    });
});
