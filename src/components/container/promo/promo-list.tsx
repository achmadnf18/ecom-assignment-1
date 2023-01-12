/* eslint-disable react-hooks/exhaustive-deps */
import usePagination from '@lucasmogari/react-pagination';
import { Box, Pagination } from '@mui/material';
import { useEffect } from 'react';

import { useAllPromosQuery } from '@/services/poinin';

import { PromoCard } from './promo-card';

export function PromoList() {
  const pagination = usePagination({
    page: 1,
    itemsPerPage: 8,
    totalItems: 0,
  });

  const { data } = useAllPromosQuery({ limit: pagination.itemsPerPage, page: pagination.page });
  const promoList = data?.items || [];

  useEffect(() => {
    pagination.setTotalItems(promoList?.length);
  }, [promoList]);

  return (
    <Box
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          columnGap: '30px',
          rowGap: '30px',
          justifyContent: 'center',
        }}
      >
        {promoList?.map((promo) => (
          <PromoCard key={promo.id} promo={promo} />
        ))}
      </Box>

      <Pagination count={pagination.totalPages} onChange={(e, page) => pagination.goTo(page)} />
    </Box>
  );
}
