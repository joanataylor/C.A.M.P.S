import { Container } from "@mui/system";
import React, { useState } from "react";
import { Button } from "@mui/material";
import "./styles/counselor.css";
import brandonchased from "../images/brandonchased.jpg";

const counselors = [
  {
    id: 1,
    name: "Ethan",
    location: "Costa Rica",
    src: "https://media.licdn.com/dms/image/C5603AQFWzIHj7Ijo2g/profile-displayphoto-shrink_800_800/0/1653944302306?e=1682553600&v=beta&t=4SBjWI3gH5OfT7Sm4-Xe1sWixose0YD9SuFjRZthEgg",
    alt: "Ethan",
    description:
      "Meet Ethan, the ultimate jack-of-all-trades! He's been a nurse, a scientist, and even a web developer - but now he's decided to switch things up and become a camp counselor. Maybe he figured it was time to stop diagnosing viruses and start dealing with the mosquito kind. Either way, he's ready to bring his scientific precision, medical expertise, and coding finesse to the great outdoors. Let's just hope he knows how to start a campfire!",
  },
  {
    id: 2,
    name: "Gokhan",
    location: "Turkey",
    src: "https://media.licdn.com/dms/image/C4E03AQFOGCpxF3oHVQ/profile-displayphoto-shrink_800_800/0/1656388466701?e=1682553600&v=beta&t=gEWxp-U8xykoEqJZO3JNYvI5wj_G34K4g194pa7zAb8",
    alt: "Gokhan",
    description:
      "Gokhan is like a walking ATM, except instead of dispensing cash, he just has an endless supply of it. He's always flashing that pearly-white, almost-perfect smile of his, which some might suspect is just a veneer he bought with all that cash. But little do they know, Gokhan is secretly a YouTube sensation, posting videos of himself scarfing down kebaps and making it rain cash on unsuspecting strangers. He used to be a web developer, but now he's a camp counselor, because apparently nothing brings him more joy than watching kids try to catch fireflies while he eats his weight in lamb skewers. Gokhan's motto in life? 'Money can't buy happiness, but it sure can buy a lot of kebap.'",
  },
  {
    id: 3,
    name: "Brandon",
    location: "California",
    src: "https://media.licdn.com/dms/image/D4D03AQGSMSYQ4Lu5tQ/profile-displayphoto-shrink_400_400/0/1678322930882?e=1683763200&v=beta&t=jY8UNhQ_wFqiP0WrES5HMbhUFaA5GxhxHeC4fmyrBss",
    alt: "Brandon",
    description:
      "Meet Brandon, the electrifying camp counselor! He's a web developer by day and a weightlifting superhero by night, but unfortunately, his muscles aren't enough to keep the lights on. His power always goes out, leaving him stumbling around in the dark like a confused moose. But fear not, for Brandon is here to save the day! With his trusty flashlight and his boundless enthusiasm, he'll keep your kids entertained and your campsite well-lit (as long as he doesn't accidentally bench-press the generator). So come on down and meet Brandon, the man who's always in the dark but never out of energy!",
  },
  {
    id: 4,
    name: "Joana",
    location: "Portugal",
    src: "https://media.licdn.com/dms/image/D5603AQGSRUXV7UZdGg/profile-displayphoto-shrink_400_400/0/1668811669457?e=1682553600&v=beta&t=yY14ue6KYvAKAeHso6C1inNWJHslP7ycuTsMSYPlGdU",
    alt: "Joana",
    description:
      "Joana, also known as Joan, is a woman of many talents and aspirations. She's lowkey married to Gokhan, which is like being highkey married, but without the pressure of constantly updating your relationship status on Facebook. As a nervous presenter, Joana always brings a new level of excitement to any presentation. Her voice might shake and her palms might sweat, but she never fails to keep her audience on their toes - mostly because she's on her toes, trying not to faint. Despite being a web developer in a past life, Joana has recently made the career switch to camp counseling. She loves spending her days in the great outdoors, teaching kids how to make s'mores and avoid poison ivy. And let's not forget about Joana's ultimate goal - she wants to have 100 babies! Yes, you heard that right. 100 little bundles of joy running around her house, all calling her 'mom'. We're not sure how she plans to achieve this feat, but we're rooting for her all the way.",
  },
  {
    id: 5,
    name: "Narciso",
    location: "California",
    src: "https://media.licdn.com/dms/image/C4E03AQGcAsIEBI1p-A/profile-displayphoto-shrink_800_800/0/1633318804437?e=1683158400&v=beta&t=HPyKWOm9cX_6EstSwl-p9-Lh_HgSzeu8ADKvMKPOL88",
    alt: "Narciso",
    description:
      "Meet Narciso, the web developer with a heart of gold and a knack for creating sites that are both beautiful and functional. He's like a unicorn in the tech world - rare and magical! And now, he's branching out as a camp counselor, bringing his unique blend of creativity and expertise to the great outdoors. Don't be surprised if he designs a website for the campfire songs and s'mores!",
  },
  {
    id: 6,
    name: "Tyler",
    location: "Hawaii",
    src: "https://media.licdn.com/dms/image/C5603AQEKdQQmau5JdA/profile-displayphoto-shrink_800_800/0/1576356265621?e=1683158400&v=beta&t=65Z1V-1EP5FpX5tU5MIi36WZpR8wKS6-RRcDdHckUJo",
    alt: "Tyler",
    description:
      "Meet Tyler, the quirkiest camp counselor you'll ever encounter. He's a former cop who's seen it all, a philosopher who can wax poetic about the meaning of life, and a web developer who can code circles around anyone. But despite all that, he's decided to ditch the tech world and embrace the great outdoors as a camp counselor. He's traded in his badge for a whistle and his computer for a compass, but don't worry, he's still full of witty one-liners and philosophical musings. So come on down to Camp Tyler and prepare to have your mind blown (and maybe a few s'mores too).",
  },
  {
    id: 7,
    name: "Vincent",
    location: "Paris",
    src: "https://media.licdn.com/dms/image/C4E03AQGZBFiotVNghg/profile-displayphoto-shrink_800_800/0/1629661099821?e=1683158400&v=beta&t=-lEX4-NqcPGQ0gczQY-tDYC7Hi0GbowYYx84mpqnnI8",
    alt: "Vincent",
    description:
      "Meet Vincent, the web developer turned camp counselor! With a bushy mustache that could make Tom Selleck jealous, Vincent knows how to keep his upper lip warm during those chilly mornings in the great outdoors. But don't let his love for Starbucks fool you, he can brew a mean pot of coffee over an open fire. He may have swapped his keyboard for a compass, but Vincent is still the king of coding - he can debug a tent faster than you can say 'HTML'. So if you need a web developer who can also lead a game of capture the flag, Vincent's your man!",
  },
  {
    id: 8,
    name: "Mike",
    location: "Italy",
    src: "https://media.licdn.com/dms/image/C5603AQE39E8yzjfoqw/profile-displayphoto-shrink_800_800/0/1583525685224?e=1683158400&v=beta&t=TNzbQN_lYaCFZkhMrrmYJrZOHQtxEw-DB__Fc9BQY_U",
    alt: "Mike",
    description:
      "Meet Mike, the ultimate gigachad and ruler of HTML and CSS. With his coding skills, he can make a website look better than a million bucks. But don't be fooled by his tech prowess, because when it comes to ice cream, he's just a big kid at heart. In fact, he loves the frozen treat so much that he once coded an entire website just to showcase his favorite flavors! Now, Mike is taking on a new challenge as a camp counselor. Will he be able to handle the chaos of campfires and s'mores, or will he retreat back to his coding cave with a pint of Rocky Road? Only time will tell. Stay tuned for the next chapter of Mike's hilarious adventures!",
  },
  {
    id: 9,
    name: "Michael",
    location: "Washington",
    src: "https://media.licdn.com/dms/image/C5103AQFj5Negw55QIg/profile-displayphoto-shrink_800_800/0/1516339115063?e=1683158400&v=beta&t=W0-ynEMfYDC3ci1PnlGlMO7MdXwNr3aNSUbX1WYfmAQ",
    alt: "Michael",
    description: "Founder of Coding Dojo",
  },
];

function CounselorDetail() {
  const [selectedCounselor, setSelectedCounselor] = useState(counselors[0]);

  const handleCounselorChange = (counselorId) => {
    const selectedCounselor = counselors.find(
      (counselor) => counselor.id === counselorId
    );
    setSelectedCounselor(selectedCounselor);
  };

  return (
    <div
      className="p-5 d-flex justify-content-around"
      style={{
        width: "100%",
        minHeight: "100%",
        backgroundSize: "cover",
        backgroundImage: `url(https://i.imgur.com/EnSclo4.jpg) `,
      }}
    >
      <Container>
        <h1 className="text-center text-light">Counselors</h1>
        <div className="d-flex">
          <div className="d-flex">
            <div className="card  my-main-card">
              <div className="card-header">
                <h1>{selectedCounselor && selectedCounselor.name}</h1>
                {/* <h5> {selectedCounselor && selectedCounselor.location}</h5> */}
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
                  {selectedCounselor && selectedCounselor.description}
                </p>
              </div>
              <Button variant="contained">Message Counselor</Button>
            </div>
          </div>

          <div className="d-flex row justify-content-end align-items-center">
            {counselors.map((counselor, index) => (
              <div className="card shadow border border-dark my-card mr-3 mb-3" key={index}>
                <img
                  className="card-img-top img-fluid bg-primary"
                  key={counselor.id}
                  src={counselor.src}
                  alt={counselor.alt}
                />
                <div className="card-body">
                  <h5 className="card-title">{counselor.name}</h5>
                  <p className="card-text">{counselor.location}</p>
                </div>
                <div
                  className="card-overlay"
                  onClick={() => handleCounselorChange(counselor.id)}
                >
                  <h5 className="card-title">Fun Facts</h5>
                  <p className="card-text">Click here</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CounselorDetail;
