import React from 'react';
import { renderHook } from "@testing-library/react"

import useChangeAppColorConfig from "./useChangeAppColorConfig"

jest.mock('src/shared/storage/themeLocalStorage', () => ({
  getThemeColorConfig: () => ({}),
  setThemeColorConfig: () => ({}),
}));


describe(useChangeAppColorConfig.name, () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should change app color at localStorage and return ", async () => {
        const useEffectSpy = jest.spyOn(React, 'useEffect').mockReturnValueOnce();
        
        const { result: { current } } = renderHook(() => useChangeAppColorConfig())

        expect(current.theme).toEqual("light")
        expect(useEffectSpy).toHaveBeenCalledTimes(1)
    })
});
