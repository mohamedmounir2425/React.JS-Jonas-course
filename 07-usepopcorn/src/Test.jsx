import React, { useState } from 'react'

export const Test = () => {

const [imageSrc, setImageSrc] = useState(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    setImageSrc(event.target.result);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};


  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageSrc ? (
        <img src={imageSrc} alt="Uploaded" style={imageStyle} />
      ) : (
        <p>Choose an image to preview</p>
      )}
    </div>
  );
}
const imageStyle = {
  width: "300px",
  height: "300px",
  objectFit: "contain",
};