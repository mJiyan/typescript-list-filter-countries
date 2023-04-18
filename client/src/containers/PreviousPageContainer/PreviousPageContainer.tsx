import { History } from 'history';
import { BackButton } from "src/modules";
import { PreviousPageWrapper } from 'src/ui-library';

const PreviousPageContainer = ({ history }: { history: History }) => (
  <PreviousPageWrapper>
    <BackButton history={history} />
  </PreviousPageWrapper>
);

export default PreviousPageContainer;
