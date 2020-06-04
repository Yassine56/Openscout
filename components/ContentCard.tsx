import { Box, Heading, Divider } from '@chakra-ui/core';

type ContentCardProps = {
  title?: string;
  children: any;
};

export const ContentCard = ({ title, children }: ContentCardProps) => {
  return (
    <Box d='flex' alignItems='center' justifyContent='center'>
      <Box
        flex='flex'
        width='xl'
        shadow='lg'
        borderWidth='1px'
        borderColor='grey'
        rounded='lg'
        p='10px'
        margin='10px'
      >
        {title && (
          <Heading as='h2' size='md' paddingBottom='0'>
            {title}
          </Heading>
        )}
        {children}
      </Box>
    </Box>
  );
};
