import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';


const Kontakt = () => (
  <Layout>
    <Helmet title={`Kontakt | ${config.siteTitle}`} />
    <Header>Kontakt</Header>
    <Container className='cont-kont'type="text">
      <h1>Kontaktieren Sie uns</h1>
      <p>
        Wir sind ein Team aus Gärtner, welche freude an Pflanzen haben.
</p>

<p>
        email adresse  <p> info@moosartig.ch </p> warscheinlich
      </p>
  
          
    </Container>
  </Layout>
); 

export default Kontakt;
