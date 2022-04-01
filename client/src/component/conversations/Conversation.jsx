import React, { useEffect } from "react";
import "./conversation.css";
import { useState } from "react";
import axios from "axios";

function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState("");

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m === currentUser._id);
    const getUser = async () => {
      const res = await axios.get("/user?userId=" + friendId);
      setUser(res.data);
    };
    getUser(friendId);
  }, [conversation, currentUser]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          user.profilePicture
            ? PF + user.profilePicture
            : PF + "person/noAvatar.png"
        }
        alt=""
      />
      <span className="conversationName">{user.username}</span>
    </div>
  );
}

export default Conversation;
