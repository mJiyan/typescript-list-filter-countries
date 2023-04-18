import { UIComponentProp } from "src/shared/types";

type CountryInformationTextType = UIComponentProp & { label: string, value: string}

const CountryInformationText: React.FC<CountryInformationTextType> = ({ props, label, value }) => (
    <p className={`${props}`}>
      <span className='font-normal'>{label}: </span> <span className='font-light'>{value}</span>
    </p>
)

export default CountryInformationText;
