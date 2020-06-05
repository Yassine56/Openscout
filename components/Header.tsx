import { Box, Heading } from '@chakra-ui/core';

/** Renders the header component. */
export const Header = () => {
  const openScoutUrl = 'http://www.openscout.vc';

  return (
    <Box
      d='flex'
      padding='5px 20px'
      alignItems='space-between'
      background='linear-gradient(to left, #b6fbff, #83a4d4)'
    >
      <Heading as='h1' size='sm'>
        OnePager by <a href={openScoutUrl}>OpenScout</a>
      </Heading>
    </Box>
  );
};
