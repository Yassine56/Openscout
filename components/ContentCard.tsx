import { Box, Heading, Skeleton } from '@chakra-ui/core';

type ContentCardProps = {
  title?: string;
  isLoading: boolean;
  children: any;
};

export const ContentCard = ({
  title,
  isLoading = false,
  children,
}: ContentCardProps) => {
  return (
    <Box d='flex' alignItems='center' justifyContent='center'>
      <Box
        flex='flex'
        width='xl'
        shadow='lg'
        borderWidth='1px'
        borderColor='grey'
        rounded='lg'
        p='0'
        margin='10px'
      >
        {title && (
          <>
            <Box>
              <Heading as='h2' size='md' m='0' p='20px 10px 0'>
                {title}
              </Heading>
            </Box>
          </>
        )}
        <Box p='10px'>{isLoading ? <LoadingSkeletons /> : children}</Box>
      </Box>
    </Box>
  );
};

const LoadingSkeletons = () => {
  return (
    <>
      <Skeleton h='15px' marginBottom='10px'></Skeleton>
      <Skeleton h='15px' marginBottom='10px'></Skeleton>
      <Skeleton h='20px'></Skeleton>{' '}
    </>
  );
};
