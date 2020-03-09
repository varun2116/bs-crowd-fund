import { BusStopsList } from './types';

export enum REG_EXP {
    ALPHA_NUMERIC = `^[a-zA-Z0-9]*$`,
    NUMERIC = `^[0-9]*$`,
    ALPHA = `^[a-zA-Z]*$`,
    EMAIL = `^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$`,
}

const GOAL_AMOUNT: number = 700;

const BUS_STOP_1 = '01112 Victoria St (Opp Bugis Junction)';
const BUS_STOP_2 = '01113 Victoria St (Bugis Stn Exit A)';
const BUS_STOP_3 = '05013 Eu Tong Sen St (Chinatown Stn Exit C)';
const BUS_STOP_4 = '05022 Eu Tong Sen St (Aft Chinatown Stn Exit D)';
const BUS_STOP_5 = '07031 Serangoon Rd (Tekka Ctr)';
const BUS_STOP_6 = '09048 Orchard Rd (Orchard Stn/Lucky Plaza)';
const BUS_STOP_7 = '10169 Tiong Bahru Rd (Tiong Bahru Stn)';
const BUS_STOP_8 = '11169 Commonwealth Ave (Commonwealth Stn Exit B/C)';
const BUS_STOP_9 = '17159 Commonwealth Ave West (Blk 365)';
const BUS_STOP_10 = '17239 Clementi Ave 3 (NTUC Fairprice)';
const BUS_STOP_11 = '41079 Dunearn Rd (Natl JC)';
const BUS_STOP_12 = '43419 Bukit Batok Ctrl (Aft Bt Batok Stn/Blk 628)';
const BUS_STOP_13 = '44259 Bukit Panjang Rd (Blk 183)';
const BUS_STOP_14 = '44251 Bukit Panjang Rd (Bt Panjang Stn/Blk 604)';
const BUS_STOP_15 = '46088 Woodlands Ctr Rd (Opp Blk 1A)';

export const busStopsList: BusStopsList = [
    {
        name: '01112',
        title: BUS_STOP_1,
        goalAmount: 700,
        amountReceived: 300,
        funders: [
            { name: 'xyz', email: 'xyz@gmail.com', funded: 100 },
            { name: 'abc', email: 'abc@gmail.com', funded: 100 },
            { name: 'def', email: 'def@gmail.com', funded: 100 },
        ],
    },
    {
        name: '01113',
        title: BUS_STOP_2,
        goalAmount: 700,
        amountReceived: 50,
        funders: [
            { name: 'xyz', email: 'xyz@gmail.com', funded: 20 },
            { name: 'abc', email: 'abc@gmail.com', funded: 30 },
        ],
    },
    {
        name: '05013',
        title: BUS_STOP_3,
        goalAmount: 700,
        amountReceived: 800,
        funders: [
            { name: 'xyz', email: 'xyz@gmail.com', funded: 500 },
            { name: 'abc', email: 'abc@gmail.com', funded: 200 },
            { name: 'def', email: 'def@gmail.com', funded: 100 },
        ],
    },
    {
        name: '05022',
        title: BUS_STOP_4,
        goalAmount: 700,
        amountReceived: 100,
        funders: [{ name: 'xyz', email: 'xyz@gmail.com', funded: 100 }],
    },
    {
        name: '07031',
        title: BUS_STOP_5,
        goalAmount: 700,
        amountReceived: 10,
        funders: [{ name: 'def', funded: 10 }],
    },
    {
        name: '09048',
        title: BUS_STOP_6,
        goalAmount: 700,
        amountReceived: 300,
        funders: [
            { name: 'xyz', email: 'xyz@gmail.com', funded: 100 },
            { name: 'abc', email: 'abc@gmail.com', funded: 100 },
            { name: 'def', email: 'def@gmail.com', funded: 100 },
        ],
    },
];
