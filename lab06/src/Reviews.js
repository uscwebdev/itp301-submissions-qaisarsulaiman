import React from 'react';

export default function Reviews(prop) {
  return (
    <div className="review">
      <img
        className="profile"
        src={prop.img_src}
        alt={prop.name}
      />
      <h3>{prop.name} says...</h3>
      <img
        src={"https://microbelift.com/wp-content/uploads/2020/06/five-star-png-free-download-fourjayorg-five-stars-png-1057_296.png"}
        alt="5 stars"
      />
      <blockquote>
        {prop.quote}
      </blockquote>
      <p>– {prop.date}</p>
    </div>
  );
}
