import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  onPageChange: (page: number) => void;
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  onPageChange,
  number,
  isCurrent = false,
}: PaginationItemProps) {
  return (
    <Button
      onClick={() => onPageChange(number)}
      size="sm"
      fontSize="xs"
      width="4"
      isDisabled={isCurrent}
      _disabled={{
        bg: 'brand.300',
        borderColor: 'brand.300',
        cursor: 'default',
      }}
      _hover={{
        _disabled: {
          bg: 'brand.300',
          borderColor: 'brand.300',
        },
      }}
    >
      {number}
    </Button>
  );
}
