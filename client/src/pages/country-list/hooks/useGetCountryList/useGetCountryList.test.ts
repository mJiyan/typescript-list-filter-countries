import React from 'react';
import { renderHook } from "@testing-library/react"

import { REDUX_STATE_MOCK } from 'src/shared/mock';

import useGetCountryList from "./useGetCountryList"

jest.mock('react-redux', () => ({
    useSelector: () => (REDUX_STATE_MOCK),
    useDispatch: jest.fn()
}));

describe(useGetCountryList.name, () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return country list from api", () => {
        const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null });
        const useEffectSpy = jest.spyOn(React, 'useEffect').mockReturnValueOnce();

        const { result: { current } } = renderHook(() => useGetCountryList())

        expect(current).toEqual(REDUX_STATE_MOCK.countries)
        expect(useRefSpy).toHaveBeenCalledTimes(1)
        expect(useEffectSpy).toHaveBeenCalledTimes(1)
    })
});
