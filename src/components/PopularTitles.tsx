"use client";
import React from "react";
import { useState } from "react";
import { Star, StarHalf } from 'lucide-react';
import styles from "./styles/PopularTitles.module.css";
import Link from "next/link";

interface IPopularTitles {
  title: string;
  image: string;
  orgTitle: string;
  rating: number;
}

const renderRating = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star width={14} height={14} />);
  }
  if (halfStar) {
    stars.push(<StarHalf width={14} height={14} />);
  }

  return stars;
};

const PopularTitles = () => {
  const [popularTitles, setPopularTitles] = useState<IPopularTitles[]>([
    {
      title: "Гуль",
      orgTitle: "ghoul",
      image:
        "https://i.pinimg.com/736x/07/b2/85/07b28575a61b590c416033acb64c23f4.jpg",
      rating: 3,
    },
    {
      title: "Атака титанов",
      orgTitle: "Atack_in_Titan",
      image:
        "https://i.pinimg.com/originals/4d/8f/67/4d8f67058aa4b29a9daf55bd815124d7.jpg",
      rating: 4.5,
    },
    {
      title: "Атака титанов",
      orgTitle: "Atack_in_Titan",
      image:
        "https://i.pinimg.com/originals/4d/8f/67/4d8f67058aa4b29a9daf55bd815124d7.jpg",
      rating: 2.5,
    },
    {
      title: "Атака титанов",
      orgTitle: "Atack_in_Titan",
      image:
        "https://i.pinimg.com/originals/4d/8f/67/4d8f67058aa4b29a9daf55bd815124d7.jpg",
      rating: 4.5,
    },
    {
      title: "Атака титанов",
      orgTitle: "Atack_in_Titan",
      image:
        "https://i.pinimg.com/originals/4d/8f/67/4d8f67058aa4b29a9daf55bd815124d7.jpg",
      rating: 4.5,
    },
    {
      title: "Атака титанов",
      orgTitle: "Atack_in_Titan",
      image:
        "https://i.pinimg.com/originals/4d/8f/67/4d8f67058aa4b29a9daf55bd815124d7.jpg",
      rating: 4.5,
    },
  ]);

  return (
    <div className={styles.PupularTitles}>
      {popularTitles.slice(0, 5).map((el) => (
        <div className={styles.card}>
          <Link href={`/anime/${el.orgTitle}`} className={`link`}>
            <img
              className={styles.image}
              draggable={false}
              alt="preview"
              src={el.image}
              width={200}
              height={280}
            />
            <div className={styles.cardText}>
              <h3>{el.title}</h3>
              <p>Rating {renderRating(el.rating)}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PopularTitles;
