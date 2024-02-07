import { Quotes, QuotesWrap } from "./quotes.styles";
import React, { useState , useEffect} from "react";
import Button from "./Button";

const RandomQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "We become what we think about.",
    author: "Earl Nightingale",
  });
  
  const loadQuotes = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    let data = await response.json();
    console.log(data);
    setQuotes(data);
  };
  
  
  
  const random = () => {
    const randomMethod = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomMethod);
  };

  
  loadQuotes();
  return (
    <>
      <Quotes>
        <div className="wrapper">
          <div className="QuotesWrap">
            <div className="quotes-text">"{quote.text}"</div>

            <div className="author-name">- {quote.author.split(",")[0]}</div>
            <div className="line"></div>
            <div>
              <Button
                onSelect={() => {
                  random();
                }}
                name={"New Quote"}
              />
            </div>
          </div>
        </div>
      </Quotes>
    </>
  );
};

export default RandomQuotes;
