import React,{ useState } from 'react';
import styles from './Form.module.css';
import { Button, Container } from 'react-bootstrap';
// const pinataSDK = require('@pinata/sdk');
// const pinata = pinataSDK('0c6a8d2b6697181586f3', '5de670b7a04c60a5597ecd1ab843ac60203f8c9d533aa3c796beebf1d908c07b');

const Form = () => {
    const [values, setValues] = useState({
        name: '',
        link: '',
        description: '',
        blockchain:'Ethereum'
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const [file, setFile] = useState('');

    function handleFileInput(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const removeSelectedFile = () => {
        setFile();
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('clicked submit button')
        console.log(`${values.name} ${values.link} ${values.description} ${values.blockchain}`)
        if(values.name && values.description && values.blockchain) {
            setValid(true);
            alert(`${values.name} ${values.link} ${values.description} ${values.blockchain}`)
        }
        setSubmitted(true);
        }

    const handleNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    };
    const handleDescriptionInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            description: event.target.value,
        }));
    };
    const handleBlockchainInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            blockchain: event.target.value,
        }));
    };
    const handleLinkInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            link: event.target.value,
        }));
    };
  return (
    <div className={styles.container}>
        <Container>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '0px 0px 50px 0px'}}>
                <div className={styles.formWrapper}>
                    <h1 className={styles.headline}>Create New Item</h1>
                    <form >
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
                            <img src={file}  className={styles.preview_img} />
                            </div>
                            <input type="file" onChange={handleFileInput} />
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.labelContainer}>
                                <label for="name">Name <span className={styles.required}>*</span></label>
                            </div>
                            <div className={styles.nameField}>
                                <input id="name" value={values.name} type="text" placeholder='Item name' onChange={handleNameInputChange}/>
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.labelContainer}>
                                <label for="link">External link</label>
                                <div>ArtifacX will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</div>
                            </div>
                            <div className={styles.linkField}>
                                <input id="link" value={values.link} type="text" placeholder='https://<your site>.com' onChange={handleLinkInputChange}/>
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.labelContainer}>
                                <label for="description">Description</label>
                                <div>The description will be included on the item's detail page underneath its image.</div>
                            </div>
                            <div className={styles.descriptionField}>
                                <textarea id="description" value={values.description} type="text"  rows={4} placeholder='Provide a detailed description of yout item.' onChange={handleDescriptionInputChange}/>
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.labelContainer}>
                                <label for="blockchain">Blockchain</label>
                            </div>
                            <div className={styles.blockchainField}>
                                <select id="blockchain" value = {values.blockchain} onChange ={handleBlockchainInputChange}>
                                    <option selected value='Ethereum' >
                                        Ethereum
                                    </option>
                                    <option value='Polygon' >
                                        Polygon
                                    </option>
                                </select>
                            </div>
                        </div>
                        <Button type='submit' className={styles.btn} size='large' onClick={handleSubmit}>Create</Button>
                    </form>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Form
