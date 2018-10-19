import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';

const Kontakt = () => (
  <Layout>
    <Helmet title={`Kontakt | ${config.siteTitle}`} />
    <Header>Kontakt</Header>
    <Container type="text">
      <h1>Kontaktieren Sie uns</h1>
      <p>
        Wir sind ein Team aus Gärtner, welche freude an Pflanzen haben.
      </p>
    </Container>
  </Layout>
);

export default Kontakt;
