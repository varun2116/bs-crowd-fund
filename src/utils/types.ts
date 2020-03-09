import { HomePageStore } from '../containers/HomePage/HomePage.types';

export type Funders = Array<{ name: string; email?: string; funded: number }>;

export type BusStopDetails = {
    name: string;
    title: string;
    goalAmount: number;
    amountReceived: number;
    funders: Funders;
};

export type BusStopsList = Array<BusStopDetails>;

export type Action = {
    type: string;
    data?: any;
};

export type Store = {
    home: HomePageStore;
};

export type DonationDetails = {
    stopName: string;
    amount: number;
    funderName: string;
    funderEmail: string;
};
