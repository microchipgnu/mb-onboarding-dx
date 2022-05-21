import {
  Deck,
  Slide,
  Heading,
  FlexBox,
  Box,
  FullScreen,
  Progress,
  Notes,
  SpectacleLogo,
} from 'spectacle'

import { MbLogo } from 'mintbase-ui'
import WalletConnectButton from './WalletConnectButton'

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
}

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
)

const Prezi = () => {
  return (
    <Deck theme={theme} template={template}>
      <Slide>
        <FlexBox className="bg-mb-background" height="100%">
          Hey buildooooor!
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <MbLogo src="./vercel.svg" />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <WalletConnectButton />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">Deploy a store</FlexBox>
      </Slide>
    </Deck>
  )
}

export default Prezi
