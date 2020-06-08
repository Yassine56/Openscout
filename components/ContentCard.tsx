import { Box, Heading, Skeleton } from '@chakra-ui/core';

type ContentCardProps = {
  title?: string;
  isLoading: boolean;
  children: any;
};

/**
 * Renders basic card for displaying content.
 * Display skeltons if isLoading.
 * */
export const ContentCard = ({
  title,
  isLoading = false,
  children,
}: ContentCardProps) => {
  return (
    <Box
      flex='flex'
      width='xl'
      shadow='lg'
      borderWidth='1px'
      borderColor='grey'
      rounded='lg'
      p='0'
      margin='20px auto'
      bg='white'
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
  );
};

/** Renders loading skeletons. */
const LoadingSkeletons = () => {
  return (
    <>
      <Skeleton h='15px' marginBottom='10px'></Skeleton>
      <Skeleton h='15px' marginBottom='10px'></Skeleton>
      <Skeleton h='20px'></Skeleton>{' '}
    </>
  );
};
