import { useState, useEffect } from 'react';


function Heroic() {
 
  const quotes = [
    { 
      text: "Courage is not the absence of fear, but the triumph over it.", 
      author: "Nelson Mandela" 
    },
    { 
      text: "A hero is someone who has given his or her life to something bigger than oneself.", 
      author: "Joseph Campbell" 
    },
    { 
      text: "Heroism is endurance for one moment more.", 
      author: "George F. Kennan" 
    },
    { 
      text: "The true hero is flawed but still fights for what’s right.", 
      author: "Unknown" 
    },
    { 
      text: "It’s not the strength of the body that counts, but the strength of the spirit.", 
      author: "J.R.R. Tolkien" 
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
  function quoteText() {
    return currentQuote.text;
  }

  function authorName() {
    return currentQuote.author;
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

export default Heroic;