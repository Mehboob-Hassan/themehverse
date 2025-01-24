import React from "react";

const reviews = [
  {
    name: "John Doe",
    image: "/images/client1.webp",
    review: "MEHVERSE took our business to the next level. Their innovative strategies and flawless execution are unmatched.",
    rating: 5,
    designation: "CEO, Tech Solutions"
  },
  {
    name: "Jane Smith",
    image: "/images/client2.webp",
    review: "Our website traffic soared by 150% thanks to their exceptional SEO and digital marketing services!",
    rating: 4.5,
    designation: "Marketing Manager, Trendy Co."
  },
  {
    name: "Alice Johnson",
    image: "/images/client3.webp",
    review: "Amazing attention to detail and creativity. Our website redesign turned out beautifully.",
    rating: 4,
    designation: "Owner, Creative Agency"
  },
];

const Reviews = () => {
  return (
    <div className="reviews-page">
      <h1 className="reviews-heading">Our Clients Speak</h1>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-image-container">
              <img src={review.image} alt={review.name} className="review-image" />
            </div>
            <div className="review-content">
              <p className="review-text">"{review.review}"</p>
              <div className="review-stars">
                {"★".repeat(Math.floor(review.rating))}
                {review.rating % 1 !== 0 && "☆"}
              </div>
              <h3 className="reviewer-name">{review.name}</h3>
              <p className="reviewer-designation">{review.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
