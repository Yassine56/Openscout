import { Box, Heading } from '@chakra-ui/core';

const OPEN_SCOUT_URL = 'http://www.openscout.vc';

/** Renders the header component. */
export const Header = () => {
  return (
    <Box
      d='flex'
      padding='5px 20px'
      alignItems='space-between'
      background='linear-gradient(to left, #b6fbff, #83a4d4)'
    >
      <Heading as='h1' size='sm'>
        OnePager by{' '}
        <a href={OPEN_SCOUT_URL} target='_blank'>
          OpenScout
        </a>
      </Heading>
    </Box>
  );
};
