import React from "react";
import styles from "./Content.module.css";
import { Tabs } from "@mantine/core";
import Items from "./Items";

const Content = () => {
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
        <div className={styles.pageheader}>
          <h1 className={styles.heading}>Collection Name</h1>
        </div>
        <div className={styles.main}>
          <Tabs position="center">
            <Tabs.Tab label="Items" color="white">
              <Items content="Items" />
            </Tabs.Tab>
            <Tabs.Tab label="About" color="white">
              <Items content="About" />
            </Tabs.Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Content;
