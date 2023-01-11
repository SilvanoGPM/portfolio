import { StackProps, VStack } from '@chakra-ui/react';
import { UseQueryResult } from 'react-query';

import { Loading } from '$components/ui/loading';
import { Empty } from '$components/ui/empty';
import { Error } from '$components/ui/error';
import { ReactNode } from 'react';

type Query<T> = UseQueryResult<T[], unknown> & { total?: number };

interface DataListProps<T> extends StackProps {
  query: Query<T>;
  render: (element: T) => JSX.Element;
  error: string;
  empty: string;
  beforeList?: ReactNode;
  afterList?: ReactNode;
}

export function DataList<T>({
  query,
  render,
  error,
  empty,
  beforeList,
  afterList,
  ...props
}: DataListProps<T>) {
  const hasData = (query.data?.length || 0) > 0;

  return (
    <>
      {query.isLoading ? (
        <Loading />
      ) : query.isError ? (
        <Error message={error} />
      ) : (
        <>
          {hasData ? (
            <VStack spacing="8" mt="8" {...props}>
              {Boolean(beforeList) && beforeList}

              {query.data?.map(render)}

              {Boolean(afterList) && afterList}
            </VStack>
          ) : (
            <Empty message={empty} />
          )}
        </>
      )}
    </>
  );
}
