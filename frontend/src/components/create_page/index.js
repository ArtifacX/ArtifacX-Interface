import React, { useEffect, useState } from 'react';
import NavigationBar from '../navbar';
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import { useActiveWeb3React } from '../../hooks/useWeb3';
import { useIsWhitelisted } from '../../hooks/useIsWhitelisted';

const CreatePage = () => {

  const {account} = useActiveWeb3React();
  const {loading,isWhitelisted} = useIsWhitelisted();
  const [allowed,setAllowed] = useState(undefined);
  const navigator = useNavigate();

  useEffect(()=>{
    if(account){
      if(!loading) {
        if(isWhitelisted) setAllowed(true);
        else {
          setAllowed(false); 
          navigator("/home");
        }
      }
    }
  },[account,loading])




  const loader = <>loading...</>

  return (
    // <RouteGuard registeredRedirectTo={"/home"}>
    <>
      <NavigationBar />
      {
        allowed==undefined && loader
      }
      {
        allowed==true && <Form/>
      }
      {
        allowed==false && loader
      }
    </>
  )
}

export default CreatePage;