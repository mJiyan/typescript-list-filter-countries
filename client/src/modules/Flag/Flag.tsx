import { FlagBox, FlagImageBox } from 'src/ui-library';
import { CountryType } from 'src/shared/types';

type FlagProps = Pick<CountryType, "flag">

const Flag = ({ flag }: FlagProps) => (
    <FlagBox>
        <FlagImageBox flag={flag} />
    </FlagBox>
)

export default Flag
