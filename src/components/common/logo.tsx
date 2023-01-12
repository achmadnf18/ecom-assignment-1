import { Box } from '@mui/material';
import Link from 'next/link';

function Logo() {
  return (
    <Box sx={{ width: '100%', display: 'grid', placeItems: 'center' }}>
      <Link href="/">
        <Box sx={{ width: 235 }} component="img" src="/images/logo.png" alt="logo" />
      </Link>
    </Box>
  );
}

export default Logo;
