import { History } from 'history';
import { BackButton } from "src/modules";
import { PreviousPageWrapper } from 'src/ui-library';
import { MainTemplateProps } from 'src/pages/country-details/templates/MainTemplate/MainTemplate';

export type PreviousPageContainerProps = Pick<MainTemplateProps, "history">

const PreviousPageContainer = ({ history }: PreviousPageContainerProps) => (
  <PreviousPageWrapper>
    <BackButton history={history} />
  </PreviousPageWrapper>
);

export default PreviousPageContainer;
