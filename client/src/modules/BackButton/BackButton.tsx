import { Button, ArrowBackIcon, Text } from "src/ui-library"

import { PreviousPageContainerProps } from "src/containers/PreviousPageContainer/PreviousPageContainer"

export const BUTTON_TESTID = 'back-button'

const BackButton = ({ history }: PreviousPageContainerProps) => (
    <Button
        props="
          xl:h-10 lg:h-10 md:h-10 sm:h-8 xs:h-8
          xl:px-10 lg:px-10 md:px-10 sm:px-4 xs:px-4
          xl:mt-0 lg:mt-0 md:mt-0 sm:mt-5 xs:mt-5"
        onClick={history.goBack}
        dataTestId={BUTTON_TESTID}
    >
        <ArrowBackIcon />
        <Text props="px-2">Back</Text>
    </Button>
)

export default BackButton
