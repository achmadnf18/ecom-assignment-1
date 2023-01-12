/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from '@emotion/styled';
import { Box, Container, Link, Typography } from '@mui/material';
import React from 'react';

import Logo from '@/components/common/logo';
import LoginForm from '@/components/container/login/login-form';

/// ///////////////////////////////

const HeadingStyle = styled(Box)({
  textAlign: 'center',
});

const ContentStyle = styled('div')({
  padding: 25,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  background: '#fff',
});

function Login() {
  return (
    <Container maxWidth="sm">
      <ContentStyle>
        <HeadingStyle>
          <Logo />
          <Typography sx={{ color: 'text.secondary', mb: 5 }}>Login to your account</Typography>
        </HeadingStyle>

        <LoginForm />

        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Don’t have an account? <Link variant="subtitle2">Sign up</Link>
        </Typography>
      </ContentStyle>
    </Container>
  );
}

export default Login;
