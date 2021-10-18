import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return <ImageCard key={image.id} image={image}/>;
  }); //object type
  return <div className="image-list">{images}</div>;
};

export default ImageList;
