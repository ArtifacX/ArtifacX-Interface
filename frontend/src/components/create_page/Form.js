import React from 'react';
import styles from './Form.module.css';
import { Button, Container } from 'react-bootstrap';


const Form = () => {
  return (
    <div className={styles.container}>
        <Container>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '0px 0px 50px 0px'}}>
                <div className={styles.formWrapper}>
                    <h1 className={styles.headline}>Create New Item</h1>
                    <form>
                        <div className={styles.fieldContainer}>
                            <div className={styles.labelContainer}>
                                <label>Image or 3D Model <span className={styles.required}>*</span></label>
                                <div>File types supported: JPG,PNG,GIF,SVG,MP4,WEBM,MP3,WAV,OGG,GLB,GLTF. Max size: 100MB</div>
                            </div>
                            <div className={styles.filepicker}>
                            <svg className="feather feather-image" height="48" width="48" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <rect height="18" width="18" rx="2" ry="2" x="3" y="3"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <polyline points="21 15 16 10 5 21"/>
                            </svg>
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.labelContainer}>
                                <label for="name">Name <span className={styles.required}>*</span></label>
                            </div>
                            <div className={styles.nameField}>
                                <input id="name" type="text" placeholder='Item name'/>
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.labelContainer}>
                                <label for="link">External link</label>
                                <div>ArtifacX will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</div>
                            </div>
                            <div className={styles.linkField}>
                                <input id="link" type="text" placeholder='https://<your site>.com'/>
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.labelContainer}>
                                <label for="description">Description</label>
                                <div>The description will be included on the item's detail page underneath its image.</div>
                            </div>
                            <div className={styles.descriptionField}>
                                <textarea id="description" type="text"  rows={4} placeholder='Provide a detailed description of yout item.'/>
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.labelContainer}>
                                <label for="blockchain">Blockchain</label>
                            </div>
                            <div className={styles.blockchainField}>
                                <select id="blockchain">
                                    <option selected>
                                        Ethereum
                                    </option>
                                    <option>
                                        Polygon
                                    </option>
                                </select>
                            </div>
                        </div>
                        <Button className={styles.btn} size='large'>Create</Button>
                    </form>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Form