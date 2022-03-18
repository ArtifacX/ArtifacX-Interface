import React from 'react';
import styles from './Collections.module.css';
import { Tabs } from '@mantine/core';
import TabContent from './TabContent';
const Collections = () => {
  return (
      <>
      <style type='text/css'>
        {`
            .mantine-Tabs-tabsListWrapper, .mantine-Tabs-default{
                border-bottom: 2px solid rgb(21,27,34);
            }
            .mantine-Tabs-tabInner{
                font-family: 'Poppins';
                color: rgb(138, 147, 155);
                font-size: 16px;
                font-weight: 600;
            }
            .mantine-Tabs-tabActive{
                border-bottom-color: #0a58ca !important;
                color: white;
            }
            .mantine-Tabs-tabActive > .mantine-Tabs-tabInner{
                color: white;
            }
        `}
      </style>
        <div className={styles.container}>
            <h1 className={styles.heading}>Explore Collections</h1>
            <div className={styles.tabsContainer}>
                <Tabs position='center'>
                    <Tabs.Tab label="All" color="white"><TabContent content='All'/></Tabs.Tab>
                    <Tabs.Tab label="Nike" color="white"><TabContent content='Nike'/></Tabs.Tab>
                    <Tabs.Tab label="Gucci" color="white"><TabContent content='Gucci'/></Tabs.Tab>
                    <Tabs.Tab label="Accessories" color="white"><TabContent content='Accessories'/></Tabs.Tab>
                    <Tabs.Tab label="Collectibles" color="white"><TabContent content='Collectibles'/></Tabs.Tab>
                </Tabs>
            </div>
        </div>
      </>
  )
}

export default Collections;