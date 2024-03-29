export const FLAG_IMAGE_BOX_TESTID = "flag-image-box-testid"

type FlagBoxType = {
  flag: string
}

const FlagImageBox: React.FC<FlagBoxType> = ({ flag }) => (
    <div className="
      xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-full xs:w-full
      xl:h-full lg:h-full md:h-full sm:h-3/4 xs:h-3/4
      bg-center bg-cover bg-no-repeat
    "
    data-testid={FLAG_IMAGE_BOX_TESTID}
    style={{ backgroundImage: `url(${flag})` }} />
  );

export default FlagImageBox;
