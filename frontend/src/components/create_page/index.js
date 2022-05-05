import React, { useEffect, useState } from 'react';
import NavigationBar from '../navbar';
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import { useActiveWeb3React } from '../../hooks/useWeb3';
import { useIsWhitelisted } from '../../hooks/useIsWhitelisted';
import { Notification } from '@mantine/core';
import styles from './index.module.css';
import { RouteGuard } from '../route_gaurd';

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

  return (
    <RouteGuard>
      <NavigationBar />
      {
        allowed==undefined && (<div className={styles.alert}>
         <Notification color="red" title="Alert" disallowClose>
          Sign In with a WHITELISTED Account!
        </Notification>
      </div>)
      }
      {
        allowed==true && <Form/>
      }
      {
        allowed==false && (<div className={styles.alert}>
         <Notification color="red" title="Alert" disallowClose>
          {account} isn't WHITELISTED!
        </Notification>
      </div>)
      }
    </RouteGuard>
  )
}

export default CreatePage;