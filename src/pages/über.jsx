import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';

const über = () => (
  <Layout>
    <Helmet title={`über | ${config.siteTitle}`} />
    <Header>Moosartig Mitarbeiter </Header>
    <Container type="text">
      <h1>Hallo</h1>
      <p>
        was wer wie wo unso

        bilder möglicherweise



      </p>
    </Container>
  </Layout>
);

export default über;
