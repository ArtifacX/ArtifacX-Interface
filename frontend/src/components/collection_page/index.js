import React from 'react';
import NavigationBar from '../navbar';
import Content from './Content';
import Header from './Header';

const CollectionPage = () => {
  return (
    <>
        <NavigationBar />
        <Header />
        <div style={{height: '100vh'}}>
            <Content />
        </div>
    </>
  )
}

export default CollectionPage;