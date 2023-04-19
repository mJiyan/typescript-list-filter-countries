import { UIComponentProp } from "src/shared/types";

export type CountryInformationTextProps = UIComponentProp & { label: string, value: string}

const CountryInformationText: React.FC<CountryInformationTextProps> = ({ props, label, value }) => (
    <p className={`${props}`}>
      <span className='font-normal'>{label}: </span> <span className='font-light'>{value}</span>
    </p>
)

export default CountryInformationText;
