import React, { useState } from "react";
import styles from "./Form.module.css";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import {
  useArtifactory,
} from "../../hooks/useContract";
import { utils } from "ethers";
import { useToasts } from "react-toast-notifications";
import { LoadingOverlay } from "@mantine/core";

const Form = () => {
  const { addToast } = useToasts();
  const [submitting, setSubmitting] = useState(false);
  const factory = useArtifactory();

  const uploadPinata = (data) => {
    JSON.stringify(data);
    setSubmitting(true);

    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    return axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        pinata_api_key: process.env.REACT_APP_APIKEY,
        pinata_secret_api_key: process.env.REACT_APP_APISECRET,
      },
    });
  };

  const deployArtifactCall = async(data) => {
    console.log(data);
    if (factory) {
      console.log("Uploading to Contract");
      factory
        .deployArtifact(data.name, data.hash, data.price)
        .then((response) => {
          console.log(response);
          addToast("Contract deployed successfully", {
            appearance: "success",
            autoDismiss: true,
            autoDismissTimeout: 2000,
            placement: "bottom-right",
          });
          setSubmitting(false);
        })
        .catch((err) => {
            console.log("here");
          console.error(err);
        });
    } else {
      console.log("Could not load factory contract");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const pinataContent = {
      name: event.target.name.value,
      imgURL: event.target.imgURL.value,
      description: event.target.description.value,
      link: event.target.link.value,
      price: event.target.price.value,
    };

    const pinataMetadata = {
      name: event.target.name.value,
    };

    const data = {
      pinataContent,
      pinataMetadata,
    };

    const response = await uploadPinata(data);
    if (response.status !== 200) {
      console.error("Could not pin to IPFS");
    } else {
      addToast("Successfully pinned data to IPFS", {
        appearance: "success",
        autoDismiss: true,
        autoDismissTimeout: 2000,
        placement: "bottom-right",
      });
      console.log(response);
      const data = {
          hash: response.data.IpfsHash,
          price: utils.parseEther(pinataContent.price),
          name: pinataContent.name
      }
      await deployArtifactCall(data);
    }
    event.target.name.value = "";
    event.target.imgURL.value = "";
    event.target.description.value = "";
    event.target.link.value = "";
    event.target.price.value = "";
  };

  return (
    <div className={styles.container}>
      <LoadingOverlay visible={submitting} overlayColor="#121212" />
      <Container>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "0px 0px 50px 0px",
          }}
        >
          <div className={styles.formWrapper}>
            <h1 className={styles.headline}>Create New Item</h1>
            <form onSubmit={handleSubmit} id="create_form">
              {/* <div className={styles.fieldContainer}>
                            <div className={styles.labelContainer}>
                                <label>Image or 3D Model <span className={styles.required}>*</span></label>
                                <div>File types supported: JPG,PNG,GIF,SVG,MP4,WEBM,MP3,WAV,OGG,GLB,GLTF. Max size: 100MB</div>
                            </div>
                            <div className={styles.filepicker}>
                            {!file && <svg className="feather feather-image" height="48" width="48" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <rect height="18" width="18" rx="2" ry="2" x="3" y="3"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <polyline points="21 15 16 10 5 21"/>
                            </svg>}
                            {file && <img src={file}  className={styles.preview_img} />}
                            </div>
                            <input type="file" />
                        </div> */}
              <div className={styles.fieldContainer}>
                <div className={styles.labelContainer}>
                  <label htmlFor="image url">
                    Image URL <span className={styles.required}>*</span>
                  </label>
                </div>
                <div className={styles.nameField}>
                  <input
                    id="image_url"
                    name={"imgURL"}
                    type="text"
                    placeholder="Image URL"
                  />
                </div>
              </div>
              <div className={styles.fieldContainer}>
                <div className={styles.labelContainer}>
                  <label htmlFor="name">
                    Name <span className={styles.required}>*</span>
                  </label>
                </div>
                <div className={styles.nameField}>
                  <input
                    id="name"
                    name={"name"}
                    type="text"
                    placeholder="Item name"
                  />
                </div>
              </div>
              <div className={styles.fieldContainer}>
                <div className={styles.labelContainer}>
                  <label htmlFor="link">External link</label>
                  <div>
                    ArtifacX will include a link to this URL on this item's
                    detail page, so that users can click to learn more about it.
                    You are welcome to link to your own webpage with more
                    details.
                  </div>
                </div>
                <div className={styles.linkField}>
                  <input
                    id="link"
                    name={"link"}
                    type="text"
                    placeholder="https://<your site>.com"
                  />
                </div>
              </div>
              <div className={styles.fieldContainer}>
                <div className={styles.labelContainer}>
                  <label htmlFor="description">Description</label>
                  <div>
                    The description will be included on the item's detail page
                    underneath its image.
                  </div>
                </div>
                <div className={styles.descriptionField}>
                  <textarea
                    id="description"
                    name={"text"}
                    type="text"
                    rows={4}
                    placeholder="Provide a detailed description of yout item."
                  />
                </div>
              </div>
              <div className={styles.fieldContainer}>
                <div className={styles.labelContainer}>
                  <label htmlFor="price">Price (ETH)</label>
                </div>
                <div className={styles.linkField}>
                  <input id="price" name={"price"} type="number" min="0" />
                </div>
              </div>
              <Button
                type="submit"
                className={styles.btn}
                size="large"
                disabled={submitting}
              >
                Create
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Form;
