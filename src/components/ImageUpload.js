import React, { useState } from 'react'
import './ImageUpload.js';
import { storage, db } from './firebase';
import firebase from "firebase";
import './ImageUpload.css';
import photo from "../assets/photo.png"
import video from "../assets/video.png"
import event from "../assets/event.jpg"


function ImageUpload() {

    const user = firebase.auth().currentUser;
    const [image, setImage] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState(0);
    // const [noLikes, setNoLikes] = useState(0);
    
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
        setImageURL(URL.createObjectURL(e.target.files[0]));
    };

    const uploadFileWithClick = () => {
        document.getElementsByClassName('four')[0].click();
    }

    

  

   

    const handleUpload = (event) => {
        if (document.getElementsByClassName('hidden')[0]) {
            document.getElementsByClassName('hidden')[0].classList.remove('hidden');
        }
        document.getElementsByClassName('postButton').disabled = true;
        document.getElementsByClassName('postButton')[0].classList.add('disabled');

        if (caption === "" && imageURL === "") {
            console.log("Prevented Access to Photo or Caption Submission")
        } else {
            event.preventDefault();
            if (imageURL === '') {
                db.collection("posts").add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: caption,
                    imageUrl: "",
                    // noLikes: noLikes,
                    username: user?.displayName,
                    uid: user?.uid
                });
                setProgress(0);
                setCaption("");
                setImage(null);
            } else {
                const uploadTask = storage.ref(`images/${image.name}`).put(image);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setProgress(progress);
                    },
                    (error) => {
                        console.log(error);
                        alert(error.message);
                    },
                    () => {
                        storage
                            .ref("images")
                            .child(image.name)
                            .getDownloadURL()
                            .then(url => {
                                db.collection("posts").add({
                                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                    caption: caption,
                                    imageUrl: url,
                                    // noLikes: noLikes,
                                    username: user?.displayName,
                                    uid: user?.uid
                                });
                                setProgress(0);
                                setCaption("");
                                setImage(null);
                            })
                    }
                )
            }
        }

    }

    return (
        <div className="imageupload">
            
                    <div class="inputForUpload">
                        <input onChange={handleChange} type="file" accept="image/*" className='four' />
                        <textarea value={caption} onChange={(e) => setCaption(e.target.value)} rows="4" placeholder={`What's on your mind, ${user?.displayName}?`} />
                    </div>
                    <div class={`previewImage ${!image && "vanish"}`}>
                        <img src={imageURL} alt ="preview" className="previewImaage" />
                    </div>

                    <progress value={progress} className="hidden" max="100" />

                    <div className="add-image">
                    <img src={photo}
                            alt = "upload photo"
                            className="photo-icon" 
                            onClick= {uploadFileWithClick} />

                    <img src={video}
                            alt = "video"
                            className="photo-icon" 
                            onClick= {uploadFileWithClick} />

                    <img src={event}
                            alt = "article"
                            className="photo-icon" 
                            onClick= {uploadFileWithClick} />                
                    </div>
                    <div className="naming">
                        <h6>Photo</h6>
                        <h6>Video</h6>
                        <h6>Event</h6>
                    </div>
                    
                    <button onClick={handleUpload} 
                    
                    type="submit" 
                    class={`postButton ${caption.length < 1 && "disabled"} ${imageURL !== "" && "visible"}`}>Post</button>
            
        </div>
    )
}

export default ImageUpload;