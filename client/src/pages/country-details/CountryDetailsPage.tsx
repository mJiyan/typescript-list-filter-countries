import React from 'react';
import { useHistory } from 'react-router-dom';

import { Maybe } from 'src/shared/types';
import { CountryDetailsPageTemplates } from 'src/shared/const';

import { useGetCountryDetails } from './hooks';
import { MainTemplate } from './templates';

export type CountryDetailsPageProps = {
    match: {
        params: {
            name: string;
            template: string;
        }
    }
}

const CountryDetailsPage: React.FC<CountryDetailsPageProps> = (props) => {
  const history = useHistory()
  const name = props.match.params.name;
  const templateName = props.match.params.template;
  const country = useGetCountryDetails(name);

  const setTemplate = (template: Maybe<string>) => {
    switch(template) {
      case CountryDetailsPageTemplates.MAIN:
        return <MainTemplate country={country} history={history}/>;
      // ...can be added more template
      default:
        return <MainTemplate country={country} history={history}/>;
    }
  }
  
  return setTemplate(templateName)
};

export default CountryDetailsPage;
