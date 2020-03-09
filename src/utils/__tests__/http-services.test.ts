import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { httpServices } from '../http-services';
// import * as helpers from '../constants';

jest.unmock('../constants');
// require the actual module so that we can mock exports on the module
const helpers = require.requireActual('../constants');

describe('HTTP Services test cases', () => {
    test("Testing 'getAllStops' service", async () => {
        const stops: any = await httpServices.getAllStops();
        expect(stops.status).toEqual(200);
    });
});
