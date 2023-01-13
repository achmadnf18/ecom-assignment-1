/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';

import { BASE_URL } from '@/config/config';
import { Promos } from '@/services/poinin';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const search = (req.query.search as string).toLowerCase();

  const start = (page - 1) * limit;
  const end = page * limit;

  try {
    const fetchPromos = await fetch(`${BASE_URL}/database/promos.json`);
    const resPromos = await fetchPromos.json();

    const items = resPromos.filter((promo: Promos) =>
      promo.merchantName.toLowerCase().includes(search),
    );

    setTimeout(
      () =>
        res.status(200).send({
          items: items.slice(start, end),
          pagination: {
            currentPage: page,
            nextPage: page + 1,
            itemsPerPage: limit,
            totalPage: Math.ceil(items.length / limit),
            totalItems: items.length,
          },
          success: true,
          message: 'Success get promos',
        }),
      2000,
    );
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.response?.data?.message ?? error.message,
    });
  }
}
