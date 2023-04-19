import { ReactNode } from "react";

export type Maybe<T> = T | null | undefined;

export type CountryBorderNames = { alpha: string; name: string; }

export type CountryType = {
    name: string;
    flag: string;
    nativeName: string;
    population: string;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string;
    currency: string;
    languages: Array<{ name: string }>;
    borders: CountryBorderNames[];
    alpha3Code: string;
};

export type CountriesType = CountryType[];

export type UIComponentProp = {
    props?: string
    children?: ReactNode;
}

