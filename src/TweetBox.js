import React, {useState} from 'react';
import './css/TweetBox.css';
import {Button, Avatar} from "@mui/material";
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Ala Ko',
            username: 'tiredkoala',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://i.pinimg.com/564x/29/c3/7f/29c37f7770b02880045ca3d20f2bfe8a.jpg",
        });

        setTweetImage("");
        setTweetMessage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src=""/>
                    <input onChange={(e) => setTweetMessage((e.target.value))} value={tweetMessage}
                           placeholder="What's happening?" type="text"/>
                </div>
                <input onChange={(e) => setTweetImage((e.target.value))} value={tweetImage}
                       className="tweetBox__imageInput" placeholder="Optional : Enter image URL" type="text"/>
                <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;