import { useState, useEffect } from 'react';

function Stoic() {

  //Stoic quotes that will be displayed
  const quotes = [
    {
      text: "The happiness of your life depends upon the quality of your thoughts.",
      author: "Marcus Aurelius"
    },
    {
      text: "We suffer more often in imagination than in reality.",
      author: "Seneca"
    },
    {
      text: "You have power over your mind—not outside events. Realize this, and you will find strength.",
      author: "Marcus Aurelius"
    },
    {
      text: "It's not what happens to you, but how you react to it that matters.",
      author: "Epictetus"
    },
    {
      text: "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
      author: "Epictetus"
    }
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    getRandomQuote();
  }, []);

  //funtion to generate a randome quote from the array
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }

  //funtion to display the author and text from the array
  function authorName() {
    return currentQuote.author;
  }

  function quoteText() {
    return currentQuote.text;
  }

  const tweetUrl = `https://twitter.com/intent/tweet?text="${currentQuote.text}" - ${currentQuote.author}`;

  return (
    <div id="quote-box" style={{ 
      maxWidth: '600px',
      margin: '0 auto', 
      padding: '2rem',
      textAlign: 'center'
    }}>
      
      <p id="text">{currentQuote.text}</p>
      
      
      <div id="author">- {currentQuote.author}</div>
      
      <div style={{ marginTop: '2rem' }}>
        <button 
          id="new-quote" 
          onClick={getRandomQuote}
          style={{
            padding: '0.5rem 1rem',
            marginRight: '1rem',
            cursor: 'pointer'
          }}
        >
          New Quote
        </button>

        <a
          id="tweet-quote"
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '0.5rem 1rem',
            background: '#1DA1F2',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px'
          }}
        >
          Tweet Quote
        </a>
      </div>
    </div>
  );
}

export default Stoic;
