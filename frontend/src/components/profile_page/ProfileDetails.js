import React from "react";
import styles from "./ProfileDetails.module.css";
import { Tabs } from "@mantine/core";
import TabContent from "./TabContent";

const ProfileDetails = () => {
  return (
    <>
      <style type="text/css">
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
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1>Account Name</h1>
          </div>
          <div className={styles.tabs}>
            <Tabs position="center">
              <Tabs.Tab label="Collected" color="white">
                  <TabContent content="Collected"/>
              </Tabs.Tab>
              <Tabs.Tab label="Offers" color="white">
                  <TabContent content='Offers'/>
              </Tabs.Tab>
              <Tabs.Tab label="Listings" color="white">
                  <TabContent content='Listings'/>
              </Tabs.Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
