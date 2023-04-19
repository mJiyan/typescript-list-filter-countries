import React from 'react';
import { renderHook } from "@testing-library/react"

import { REDUX_STATE_MOCK } from 'src/shared/mock';

import useGetCountryDetails from "./useGetCountryDetails"

jest.mock('react-redux', () => ({
    useSelector: () => (REDUX_STATE_MOCK),
    useDispatch: jest.fn()
}));

describe(useGetCountryDetails.name, () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return selected country when name is provided to api", () => {
        const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null });
        const useEffectSpy = jest.spyOn(React, 'useEffect').mockReturnValueOnce();

        const { result: { current } } = renderHook(() => useGetCountryDetails("Afghanistan"))

        expect(current).toEqual(REDUX_STATE_MOCK.country)
        expect(useRefSpy).toHaveBeenCalledTimes(1)
        expect(useEffectSpy).toHaveBeenCalledTimes(1)
    })
});
