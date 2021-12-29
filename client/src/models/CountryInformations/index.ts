export default interface ICountryInformations {
    name: string;
    nativeName: string;
    population: string;
    region: string;
    subRegion: string;
    capital: string;
    topLevelDomain: string;
    currencies: string;
    languages: Array<{ name: string }>;
    borderCountries?: { alpha: string; name: string; }[];
}

