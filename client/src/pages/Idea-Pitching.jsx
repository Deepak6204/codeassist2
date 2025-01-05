
import React, { useState } from "react";
import AppNavbar from "../components/IdeaPitchComp/Navbar"
import Post from "../components/IdeaPitchComp/Post"
import PostForm from "../components/IdeaPitchComp/PostForm";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../index.css'
import Navbar from "../components/Navbar"


const currentUserID = 1; //logged-in user ID

function IdeaPitching() {
  const [posts, setPosts] = useState([]);
  const [view, setView] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const handlePostSubmit = (text, image) => {
    if (text.trim() || image) {
      const newPost = {
        content: text,
        image: image ? URL.createObjectURL(image) : null,
        userId: currentUserID,
        reactions: {},
        comments: [],
      };
      setPosts([...posts, newPost]);
      setShowModal(false);
    }
  };

  //Emoji-Reactions wala feature
  const handleReaction = (index, emoji) => {
    const updatedPosts = [...posts];
    const reactions = updatedPosts[index].reactions;

    if (reactions[emoji]) {
      reactions[emoji]++;
    } else {
      reactions[emoji] = 1;
    }

    updatedPosts[index].reactions = reactions;
    setPosts(updatedPosts);
  };

  const handleComment = (index, comment) => {
    const updatedPosts = [...posts];
    updatedPosts[index].comments.push(comment);
    setPosts(updatedPosts);
  };

  const filteredPosts =
    view === "my"
      ? posts.filter((post) => post.userId === currentUserID)
      : posts;

  return (
    <>
    <Navbar/>
    <AppNavbar setView={setView} />
    <div style={{display: "flex", justifyContent: "center"}}>
    <div className="ideaPitch-container" style={{width:"70%"}}>
      <div className="container-idea-pitch ">
        {filteredPosts.map((post, index) => (
          <Post
            key={index}
            post={post}
            index={index}
            handleReaction={handleReaction}
            handleComment={handleComment}
          />
        ))}

        {/* Floating Button-new post */}
        <Button
          className="rounded-circle"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "rgb(0, 255, 166)",
            height: "70px",
            width: "74px",
            paddingBottom: "80px",
          }}
          onClick={() => setShowModal(true)}
        >
          <span style={{fontSize: "43px", background:"transparent"}}>+</span>
        </Button>

        {/* Modal-new post */}
        <PostForm
          showModal={showModal}
          setShowModal={setShowModal}
          handlePostSubmit={handlePostSubmit}
        />
      </div>
    </div>
    </div>
    </>
  );
}

export default IdeaPitching;
