import { Container } from "@mui/system";
import React, { useState } from "react";
import { Button } from "@mui/material";
import "./styles/counselor.css";

function CounselorDetail() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (imageId) => {
    const selectedImage = images.find((image) => image.id === imageId);
    setSelectedImage(selectedImage);
  };
  const counselors = [
    { name: "Ethan", Location: "Arizona" },
    { name: "Gokhan", Location: "Turkey" },
    { name: "Brandon", Location: "California" },
    { name: "Joana", Location: "Portugal" },
    { name: "Ethan", Location: "Arizona" },
    { name: "Gokhan", Location: "Turkey" },
    { name: "Ethan", Location: "Arizona" },
    { name: "Brandon", Location: "California" },
    { name: "Joana", Location: "Portugal" },
    
  ];

  const images = [
    {
      id: 1,
      src: "https://media.licdn.com/dms/image/C4E03AQFOGCpxF3oHVQ/profile-displayphoto-shrink_800_800/0/1656388466701?e=1682553600&v=beta&t=gEWxp-U8xykoEqJZO3JNYvI5wj_G34K4g194pa7zAb8",
      alt: "Gokhan Sigircik",
    },
    {
      id: 2,
      src: "https://media.licdn.com/dms/image/C5603AQFWzIHj7Ijo2g/profile-displayphoto-shrink_800_800/0/1653944302306?e=1682553600&v=beta&t=4SBjWI3gH5OfT7Sm4-Xe1sWixose0YD9SuFjRZthEgg",
      alt: "Ethan Smith",
    },
    {
      id: 3,
      src: "https://media.licdn.com/dms/image/D5635AQEJSvwkYb6jrw/profile-framedphoto-shrink_800_800/0/1676223550707?e=1677873600&v=beta&t=TdWJ-46nftzDWfJHeehT9DmXF3WLXgjYhSjWoh0aVAE",
      alt: "Brandon DeBenedectis",
    },
    {
      id: 4,
      src: "https://media.licdn.com/dms/image/D5603AQGSRUXV7UZdGg/profile-displayphoto-shrink_400_400/0/1668811669457?e=1682553600&v=beta&t=yY14ue6KYvAKAeHso6C1inNWJHslP7ycuTsMSYPlGdU",
      alt: "Joana Grave",
    },
    {
      id: 5,
      src: "https://media.licdn.com/dms/image/C4E03AQFOGCpxF3oHVQ/profile-displayphoto-shrink_800_800/0/1656388466701?e=1682553600&v=beta&t=gEWxp-U8xykoEqJZO3JNYvI5wj_G34K4g194pa7zAb8",
      alt: "Gokhan Sigircik",
    },
    {
      id: 6,
      src: "https://media.licdn.com/dms/image/C5603AQFWzIHj7Ijo2g/profile-displayphoto-shrink_800_800/0/1653944302306?e=1682553600&v=beta&t=4SBjWI3gH5OfT7Sm4-Xe1sWixose0YD9SuFjRZthEgg",
      alt: "Ethan Smith",
    },
    {
      id: 7,
      src: "https://media.licdn.com/dms/image/D5635AQEJSvwkYb6jrw/profile-framedphoto-shrink_800_800/0/1676223550707?e=1677873600&v=beta&t=TdWJ-46nftzDWfJHeehT9DmXF3WLXgjYhSjWoh0aVAE",
      alt: "Brandon DeBenedectis",
    },
    {
      id: 8,
      src: "https://media.licdn.com/dms/image/D5603AQGSRUXV7UZdGg/profile-displayphoto-shrink_400_400/0/1668811669457?e=1682553600&v=beta&t=yY14ue6KYvAKAeHso6C1inNWJHslP7ycuTsMSYPlGdU",
      alt: "Joana Grave",
    },
    {
      id: 9,
      src: "https://media.licdn.com/dms/image/C4E03AQFOGCpxF3oHVQ/profile-displayphoto-shrink_800_800/0/1656388466701?e=1682553600&v=beta&t=gEWxp-U8xykoEqJZO3JNYvI5wj_G34K4g194pa7zAb8",
      alt: "Joana Grave",
    },
  ];

  return (
    <Container>
      <h1>Counselors</h1>
      <div className="d-flex">
        <div className="d-flex">
          <div className="card my-main-card">
            <div className="card-header">
              <h1>Ethan Smith</h1>
            </div>
            {selectedImage && (
              <img
                className="card-img-top img-fluid"
                src={selectedImage.src}
                alt="Ethans pic"
              />
            )}
            <div className="card-body">
              <p className="card-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
              </p>
            </div>
            <Button variant="contained">Message Counselor</Button>
          </div>
        </div>

        <div className="d-flex row justify-content-end align-items-center">
          {counselors.map((counselor, index) => (
            <div className="card shadow my-card w-25 mr-3" key={index}>
              <img
                className="card-img-top img-fluid"
                key={images[index].id}
                src={images[index].src}
                alt={images[index].alt}
              />
              <div className="card-body">
                <h5 className="card-title">{counselor.name}</h5>
                <p className="card-text">{counselor.Location}</p>
              </div>
              <div
                className="card-overlay"
                onClick={() => handleImageChange(images[index].id)}
              >
                <h5 className="card-title">Fun Facts</h5>
                <p className="card-text">Brief description goes here</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default CounselorDetail;
