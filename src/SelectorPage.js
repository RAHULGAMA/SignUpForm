import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/images/logo.png'; // Import your logo image
import card1 from './assets/images/card1.jpeg'; // Import card images
import card2 from './assets/images/card2.jpg';
import card3 from './assets/images/card3.jpg';
import './SelectorPage.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function FinalPage() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [showText, setShowText] = useState({
    card1: false,
    card2: false,
    card3: false
  });

  const handleCardClick = (cardId) => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards(selectedCards.filter((id) => id !== cardId));
      setShowText({ ...showText, [cardId]: false });
    } else {
      setSelectedCards([...selectedCards, cardId]);
      setShowText({ ...showText, [cardId]: true });
    }
  };


  return (
    <div className="container1">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <Link to="/another-page" className="back-button"><ArrowBackIosIcon/></Link>
      </div>
      <div className="content">
        <h1>What brings you to the Dribble?</h1>
        <p>Select the option that best descibe you. Don't worry, you can explore other options later.</p>
      </div>
      <div className="card-selection">
        {/* <label className="label"></label> */}
        <div className="card-images">
          <div class='crd'>
            <div className="card">
              <label htmlFor="card1">
                <img src={card1} alt="Card 1" />
              </label>
            </div>
            <h2>I'm a designer looking to <br /> share my work</h2>
            {showText.card1 && <h6> sahre your all design work here in dribble. </h6>}
            <input
                type="checkbox"
                id="card1"
                checked={selectedCards.includes("card1")}
                onChange={() => handleCardClick("card1")}
              />
          </div>
          <div class='crd'>
            <div className="card">
              <label htmlFor="card2">
                <img src={card2} alt="Card 2" />
              </label>
            </div>
            <h2>I'm looking to <br /> designer</h2>
            {showText.card2 && <h6>want a talented and a criticle thinking designer.</h6>}
            <input
              type="checkbox"
              id="card2"
              checked={selectedCards.includes("card2")}
              onChange={() => handleCardClick("card2")}
            />
          </div>
          <div class='crd'>
            <div className="card">
              <label htmlFor="card3">
                <img src={card3} alt="Card 3" />
              </label>
            </div>
            <h2>I'm looking for design <br /> inspiration </h2>
            {showText.card3 && <h6>Dribble is the leading source for design inspiration.</h6>}
            <input
                type="checkbox"
                id="card3"
                checked={selectedCards.includes("card3")}
                onChange={() => handleCardClick("card3")}
              />
          </div>
        </div>
        <div class='anything'>
          {selectedCards.length === 1 && (
            <p>Anything else? You can select multiple.</p>
          )}
        </div>
      </div>
      <div className="finish-button">
        <Link to="/next-page" className="button1">Finish</Link>
      </div>
      <p class='pp'>or press return</p>
    </div>
  );
}

export default FinalPage;
