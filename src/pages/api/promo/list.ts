/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';

import { BASE_URL } from '@/config/config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const fetchPromos = await fetch(`${BASE_URL}/database/promos.json`);
    const resPromos = await fetchPromos.json();

    setTimeout(
      () =>
        res.status(200).send({
          items: resPromos,
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
