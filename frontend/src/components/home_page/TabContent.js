import React from "react";
import { useNavigate } from "react-router-dom";
import { Image, Paper, Badge, SimpleGrid } from "@mantine/core";
import { Row, Col } from "react-bootstrap";
import styles from "./TabContent.module.css";
import Grow from "@mui/material/Grow";

const TabContent = (props) => {
  const history = useNavigate();

  const onClickHandler = (address) => {
    history(`/assets/${address}`);
  };

  return (
    <>
      <style type="text/css">
        {`
            .mantine-Image-placeholder{
              border-radius: 5px;
              background: rgba(18, 18, 18, 0.7);
              backdrop-filter: blur(20px);
              transform: translateZ(0px);
            }
        `}
      </style>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {props.nfts.map((nft, i) => {
          return (
            <Grow in={true} key={props.uri[i]}>
              <Paper
                className={styles.paper}
                shadow="xs"
                p="md"
                key={props.addresses[i]}
                onClick={() => {
                  onClickHandler(props.addresses[i]);
                }}
                {...{ timeout: 0.4 }}
              >
                <div className={styles.imagePlaceholder}>
                  <Image
                    height={200}
                    src={nft.data["imgURL"]}
                    withPlaceholder
                    radius={5}
                  />
                </div>
                <div className={styles.infoPlaceholder}>
                  <Row>
                    <Col
                      sm={7}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                      }}
                    >
                      <h6 style={{ color: "white" }}>{nft.data["name"]}</h6>
                    </Col>
                    <Col
                      sm={5}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                      }}
                    >
                      <Badge radius="lg" color="blue">
                        {nft.data["price"]} ⧫
                      </Badge>
                    </Col>
                  </Row>
                </div>
                <div className={styles.descPlaceholder}>
                  <p>{nft.data["description"]}</p>
                </div>
              </Paper>
            </Grow>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default TabContent;
