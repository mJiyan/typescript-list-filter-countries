import React from 'react';
import { Link } from 'react-router-dom'

import { BorderCountryWrapper } from 'src/ui-library';
import { CountryBorderNames } from 'src/shared/types';

const BorderCountry: React.FC<CountryBorderNames> = ({ alpha, name }) => (
  <BorderCountryWrapper>
    <Link to={'/name/' + alpha}>
      {name}
    </Link>
  </BorderCountryWrapper>
);

export default BorderCountry;
