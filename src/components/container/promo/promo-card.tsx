import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { Promos } from '@/services/poinin';

export type PromoCardProps = {
  promo: Promos;
};

export function PromoCard({ promo }: PromoCardProps) {
  return (
    <Card sx={{ width: 140 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={promo?.background}
        title={promo?.merchantName || 'promo'}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {promo?.merchantName}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {promo?.titleRow1} {promo?.titleRow2}
        </Typography>
      </CardContent>
    </Card>
  );
}
