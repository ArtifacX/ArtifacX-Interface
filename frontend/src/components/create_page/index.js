import React from 'react';
import NavigationBar from '../navbar';
import Form from './Form';
import { RouteGuard } from '../route_gaurd';

const CreatePage = () => {
  return (
    // <RouteGuard registeredRedirectTo={"/home"}>
    <>
    <NavigationBar />
    <Form />
    </>
    // </RouteGuard>
  )
}

export default CreatePage;