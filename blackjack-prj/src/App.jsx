import React, { useState, useEffect } from 'react';
import './App.css';

const cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

function App() {
  const [playerHand, setPlayerHand] = useState([]);
  const [computerHand, setComputerHand] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [message, setMessage] = useState('');
  const [subMessage, setSubMessage] = useState('');
  const [isGameActive, setIsGameActive] = useState(false);

  const dealCard = () => {
    return cards[Math.floor(Math.random() * cards.length)];
  };

  const calculateScore = (hand) => {
    let score = hand.reduce((sum, card) => sum + card, 0);
    let aceCount = hand.filter(card => card === 11).length;
    while (score > 21 && aceCount > 0) {
      score -= 10;
      aceCount -= 1;
    }
    return score;
  };

  const getDisplayHand = (hand) => {
    let adjustedHand = [...hand];
    let score = adjustedHand.reduce((sum, card) => sum + card, 0);
    let aceCount = adjustedHand.filter(card => card === 11).length;

    const displayHand = [];

    for (let card of adjustedHand) {
      if (card === 11 && score > 21 && aceCount > 0) {
        displayHand.push(1);
        score -= 10;
        aceCount -= 1;
      } else {
        displayHand.push(card);
      }
    }

    return displayHand;
  };

  const startGame = () => {
    setIsGameActive(true);
    const newPlayerHand = [dealCard(), dealCard()];
    const newComputerHand = [dealCard()];
    setPlayerHand(newPlayerHand);
    setComputerHand(newComputerHand);
    setPlayerScore(calculateScore(newPlayerHand));
    setComputerScore(calculateScore(newComputerHand));
    setMessage('');
    setSubMessage('');
  };

  const hit = () => {
    const newHand = [...playerHand, dealCard()];
    setPlayerHand(newHand);
    setPlayerScore(calculateScore(newHand));
  };

  const stand = () => {
    let finalComputerHand = [...computerHand];
    let finalComputerScore = calculateScore(finalComputerHand);

    while (finalComputerScore < 17) {
      const newCard = dealCard();
      finalComputerHand = [...finalComputerHand, newCard];
      finalComputerScore = calculateScore(finalComputerHand);
    }
    setComputerHand(finalComputerHand);
    setComputerScore(finalComputerScore);
    determineWinner(playerScore, finalComputerScore);
    setIsGameActive(false);
  };

  const determineWinner = (pScore, cScore) => {
    if (cScore > 21) {
      setMessage("Computer loses! You win! 🥳");
    } else if (pScore === cScore) {
      setMessage("It's a draw! 🤝");
    } else if (pScore > cScore) {
      setMessage("You win! 🎉");
    } else {
      setMessage("You lose 😤");
    }
    setSubMessage('');
  };

  useEffect(() => {
    if (isGameActive) {
      if (playerScore === 21) {
        setMessage("BLACKJACK! You win! 🎉");
        setSubMessage("");
        setIsGameActive(false);
      } else if (playerScore > 21) {
        setMessage("You went over! You lose 😭");
        setSubMessage("This is why you don't gamble!!!");
        setIsGameActive(false);
      }
    }
  }, [playerScore, isGameActive]);

  return (
    <div className="App">
      <div className="header">
        <pre>
{`.------.            _     _            _    _            _    
|H_  _ |.          | |   | |          | |  (_)          | |   
|( \\/ ).-----.     | |__ | | __ _  ___| | ___  __ _  ___| | __
| \\  /|P /\\  |     | '_ \\| |/ _\` |/ __| |/ / |/ _\` |/ __| |/ /
|  \\/ | /  \\ |     | |_) | | (_| | (__|   <| | (_| | (__|   < 
\`-----| \\  / |     |_.__/|_|\\__,_|\\___|_|\\_\\ |\\__,_|\\___|_|\\_\\
      |  \\/ P|                            _/ |                
      \`------'                           |__/   `}
        </pre>
        <h1>React Blackjack</h1>
        <p>A simple game of Blackjack.</p>
      </div>

      <div className="game-area">
        <div className="player-section">
          <h2>Your Cards:</h2>
          <div className="card-list">
            {getDisplayHand(playerHand).map((card, index) => (
              <div key={index} className="card">{card}</div>
            ))}
          </div>
          <p>Your Score: <strong>{playerScore}</strong></p>
        </div>

        <div className="computer-section">
          <h2>Computer's Cards:</h2>
          <div className="card-list">
            {isGameActive ? (
              <div className="card">{computerHand[0]}</div>
            ) : (
              getDisplayHand(computerHand).map((card, index) => (
                <div key={index} className="card">{card}</div>
              ))
            )}
          </div>
          <p>Computer's Score: <strong>{isGameActive ? '?' : computerScore}</strong></p>
        </div>
      </div>

      <div className="controls">
        {!isGameActive ? (
          <button onClick={startGame}>Start Game</button>
        ) : (
          <>
            <button onClick={hit}>Draw Card</button>
            <button onClick={stand}>Stop Drawing Cards</button>
          </>
        )}
      </div>

      <div className="message-area">
        <p>{message}</p>
        {subMessage && <p>{subMessage}</p>}
      </div>
    </div>
  );
}

export default App;
