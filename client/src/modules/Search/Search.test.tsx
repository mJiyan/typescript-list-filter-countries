import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';

import { wait } from 'src/shared/tests'

import Search, { SearchProps } from './Search'

const mockSearch = jest.fn();

const SEARCH_VALUE = "game of thrones"

const setUp = ({ search }: SearchProps) => render(<Search search={search} />)

describe(Search.name, () => {
    it("should formik submit searched value to the form", async () => {
        setUp({ search: mockSearch })

        const searchInput = screen.getByPlaceholderText("Search for a country...")

        await userEvent.type(searchInput, SEARCH_VALUE);

        await wait(1000)
        expect(mockSearch).toHaveBeenCalled()
    })
})
