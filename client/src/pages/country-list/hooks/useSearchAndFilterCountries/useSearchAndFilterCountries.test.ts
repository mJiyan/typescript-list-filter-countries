import React from 'react';
import { renderHook } from "@testing-library/react"

import { REDUX_STATE_MOCK } from 'src/shared/mock';

import useSearchAndFilterCountries from "./useSearchAndFilterCountries"

jest.mock('react-redux', () => ({
    useSelector: () => (REDUX_STATE_MOCK),
    useDispatch: jest.fn()
}));

describe(useSearchAndFilterCountries.name, () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return country list from api", () => {
        const useEffectSpy = jest.spyOn(React, 'useEffect').mockReturnValueOnce();

        const { result: { current } } = renderHook(() => useSearchAndFilterCountries(REDUX_STATE_MOCK.countries))

        expect(current.countryStates).toEqual(undefined)
        expect(useEffectSpy).toHaveBeenCalledTimes(1)
    })
});
