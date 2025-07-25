import React from "react";

const CardItem = ({ image, title, text, link }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};


const Card = () => {
  const cardData = [
    {
      image: "https://picsum.photos/200?random=1",
      title: "Card 1",
      text: "This is the first card.",
      link: "#"
    },
    {
      image: "https://picsum.photos/200?random=2",
      title: "Card 2",
      text: "Here’s some more example text.",
      link: "#"
    },
    {
      image: "https://picsum.photos/200?random=3",
      title: "Card 3",
      text: "This content is totally different.",
      link: "#"
    },
    {
      image: "https://picsum.photos/200?random=4",
      title: "Card 4",
      text: "Last one – still reusable!",
      link: "#"
    }
  ];

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between gap-3">
        {cardData.map((item, index) => (
          <CardItem
            key={index}
            image={item.image}
            title={item.title}
            text={item.text}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
