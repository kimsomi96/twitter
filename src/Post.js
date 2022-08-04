import React from 'react';
import './css/Post.css';
import {Avatar} from '@mui/material';
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";


function Post({
                  displayName, username, verified, text, image, avatar
              }) {
    return (<div className="post">
        <div className="post__avatar">
            <Avatar src={avatar}/>
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        {displayName}{" "}
                        <span className="post__headerSpecial">
                            {verified && <VerifiedUser className="post__badge"/>}@{username}
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt=""/>
            <div className="post__footer">
                <ChatBubbleOutlineIcon/>
                <RepeatIcon/>
                <FavoriteBorderIcon/>
                <PublishIcon/>
            </div>
        </div>
    </div>)
}

export default Post;