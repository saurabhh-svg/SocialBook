import React from "react";
import "./StoryReel.css";
import Story from "./Story";
function StoryReel() {
  return (
    <div className="storyReel ">
      <Story
        image="https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/"
        profileSrc="https://pixabay.com/photos/road-forest-fall-path-trail-trees-1072821/"
        title="singh"
      />

      <Story image="" profileSrc="" title="singh" /> 
      <Story image="" profileSrc="" title="singh" />
      <Story image="" profileSrc="" title="singh" />
      <Story image="" profileSrc="" title="singh" />
    </div>
  );
}

export default StoryReel;
