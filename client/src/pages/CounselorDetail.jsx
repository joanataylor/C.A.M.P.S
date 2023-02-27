import { Container } from "@mui/system";
import React, { useState } from "react";
import { Button } from "@mui/material";
import "./styles/counselor.css";

function CounselorDetail() {
  const [selectedCounselor, setSelectedCounselor] = useState(null);

  const handleCounselorChange = (counselorId) => {
    const selectedCounselor = counselors.find((counselor) => counselor.id === counselorId);
    setSelectedCounselor(selectedCounselor);
  };

  const counselors = [
    {
      id: 1,
      name: "Gokhan Sigircik",
      location: "Turkey",
      src: "https://media.licdn.com/dms/image/C4E03AQFOGCpxF3oHVQ/profile-displayphoto-shrink_800_800/0/1656388466701?e=1682553600&v=beta&t=gEWxp-U8xykoEqJZO3JNYvI5wj_G34K4g194pa7zAb8",
      alt: "Gokhan Sigircik",
    },
    {
      id: 2,
      name: "Ethan Smith",
      location: "Arizona",
      src: "https://media.licdn.com/dms/image/C5603AQFWzIHj7Ijo2g/profile-displayphoto-shrink_800_800/0/1653944302306?e=1682553600&v=beta&t=4SBjWI3gH5OfT7Sm4-Xe1sWixose0YD9SuFjRZthEgg",
      alt: "Ethan Smith",
    },
    {
      id: 3,
      name: "Brandon DeBenedectis",
      location: "California",
      src: "https://media.licdn.com/dms/image/D5635AQEJSvwkYb6jrw/profile-framedphoto-shrink_800_800/0/1676223550707?e=1677873600&v=beta&t=TdWJ-46nftzDWfJHeehT9DmXF3WLXgjYhSjWoh0aVAE",
      alt: "Brandon DeBenedectis",
    },
    {
      id: 4,
      name: "Joana Grave",
      location: "Portugal",
      src: "https://media.licdn.com/dms/image/D5603AQGSRUXV7UZdGg/profile-displayphoto-shrink_400_400/0/1668811669457?e=1682553600&v=beta&t=yY14ue6KYvAKAeHso6C1inNWJHslP7ycuTsMSYPlGdU",
      alt: "Joana Grave",
    },
    {
      id: 5,
      name: "Rochelle Beckford",
      location: "New York",
      src: "https://media.licdn.com/dms/image/C4E03AQE1av6TQbUFLA/profile-displayphoto-shrink_800_800/0/1657157060858?e=1683158400&v=beta&t=ZwLbOhWoDgiOrfTXHw2F3P8TfVSN0zotPURXf-Ui6k0",
      alt: "Rochelle Beckford",
    },
  ];

  return (
    <Container>
      <h1>Counselors</h1>
      <div className="d-flex">
        <div className="d-flex">
          <div className="card my-main-card">
            <div className="card-header">
              <h1>{selectedCounselor.name}</h1>
            </div>
            {selectedCounselor && (
              <img
                className="card-img-top img-fluid"
                src={selectedCounselor.src}
                alt={selectedCounselor.name}
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
                key={counselor.id}
                src={counselor.src}
                alt={counselor.alt}
              />
              <div className="card-body">
                <h5 className="card-title" name={counselor.name}>{counselor.name}</h5>
                <p className="card-text">{counselor.location}</p>
              </div>
              <div
                className="card-overlay"
                onClick={() => handleCounselorChange(counselor.id)}
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
