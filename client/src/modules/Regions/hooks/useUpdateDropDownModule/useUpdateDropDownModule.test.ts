import React from 'react';
import { renderHook } from "@testing-library/react"

import useUpdateDropDownModule from "./useUpdateDropDownModule"

const mockSetRegion = jest.fn()

describe(useUpdateDropDownModule.name, () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render as expected", () => {
        const { result: { current } } = renderHook(() => useUpdateDropDownModule({ setRegion: mockSetRegion }))

        expect(current.isOpen).toEqual(false)
        expect(current.title).toEqual('Filter by Region')
    })
});
