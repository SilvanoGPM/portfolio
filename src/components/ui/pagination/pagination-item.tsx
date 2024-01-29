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
      variant="outline"
      fontSize="xs"
      width="4"
      isDisabled={isCurrent}
    >
      {number}
    </Button>
  );
}
