import React, { useEffect, useState } from "react";
import './Homepage.css';

const Homepage = () => {
  const wordsArray = ["Welcome", "to", "Pixel","Quest",":","The","NFT","Marketplace"];
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < wordsArray.length) {
        
        setWords(prevWords => [...prevWords, wordsArray[index]]);
        setIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 500); 

    return () => clearInterval(intervalId); 
  }, [index, wordsArray.length]);

  return (
    <div className="idk">
      {words.map((word, index) => (
        <span key={index}>{word} </span>
      ))}
    </div>
  );
}

export default Homepage;
