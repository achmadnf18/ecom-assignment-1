/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import usePagination from '@lucasmogari/react-pagination';
import { Box, Pagination, TextField } from '@mui/material';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

import { useAllPromosQuery } from '@/services/poinin';

import { PromoCard } from './promo-card';
import { PromoSkeleton } from './promo-skeleton';

export function PromoList() {
  const [search, setSearch] = useState('');
  const pagination = usePagination({
    page: 1,
    itemsPerPage: 8,
    totalItems: 1,
  });

  const { data, isFetching } = useAllPromosQuery({
    search,
    limit: pagination.itemsPerPage,
    page: pagination.page,
  });
  const promoList = data?.items || [];

  useEffect(() => {
    pagination.setTotalItems(data?.pagination.totalItems || 1);
  }, [promoList]);

  return (
    <Box component="section" sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Box sx={{ display: 'flex' }}>
        <TextField
          label="Search Promo"
          id="search"
          fullWidth
          onChange={debounce((e) => setSearch(e.target.value), 2000)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const searchVal = (e.target as HTMLTextAreaElement).value;
              setSearch(searchVal);
            }
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          columnGap: '30px',
          rowGap: '30px',
          justifyContent: 'center',
        }}
      >
        {isFetching && <PromoSkeleton />}

        {!isFetching &&
          promoList?.map((promo, idx) => <PromoCard key={`${idx}-${promo.id}`} promo={promo} />)}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination count={pagination.totalPages} onChange={(e, page) => pagination.goTo(page)} />
      </Box>
    </Box>
  );
}
