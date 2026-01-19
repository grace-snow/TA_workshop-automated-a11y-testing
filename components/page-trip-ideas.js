import React, { useRef, useState } from 'react';
import BodyClassName from 'react-body-classname';
import { Helmet } from 'react-helmet';

import HeaderPortal from 'components/header-portal';

const TripIdeasPage = () => {
  return (
    <BodyClassName className='page-plans'>
      <>
        <HeaderPortal>
          <h1 className='visually-hidden'>Trip Ideas</h1>
          <Helmet>
            <title>Trip Ideas - CampSpots</title>
          </Helmet>
        </HeaderPortal>
        <section>
          <header className='page-header'>
            <div className='page-header-content layout'>
              <h2 className='primary-heading h1-style'>Trip Ideas</h2>
            </div>
          </header>
          <article className='layout'></article>
        </section>
      </>
    </BodyClassName>
  );
};

export default TripIdeasPage;
