import React, { useEffect, useState, useContext } from 'react';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Home.css';  
import Hero from '../../components/Hero';
import Overview from '../../components/Overview';

const Home = () => {
  const { allcoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    setDisplayCoin(allcoin);
  }, [allcoin]);

  const inputHandler = (e) => {
    setInput(e.target.value);
    if (!e.target.value) {
      setDisplayCoin(allcoin);
    }
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    const coins = await allcoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
  };

  return (
    <Container className="home">
      <div className="hero-section text-center text-light mb-4">
        <h1 className="display-4">Welcome</h1>
        <p className="lead">Explore the world of cryptocurrency...</p>
        <Hero />
        <br />
        <Overview />
        <br />
        <Form onSubmit={searchHandler} className="d-flex justify-content-center w-auto" >
          <Form.Control 
            type="text" 
            placeholder="Search crypto..." 
            value={input} 
            onChange={inputHandler} 
            list="coinlist" 
            className="me-2 search-input"
            required
          />
          <datalist id="coinlist" >
            {allcoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>
          <Button variant="warning" type="submit">Search</Button>
        </Form>
      </div>

      <div className="crypto-table">
        <Row className="table-header sticky-top">
          <Col xs={2}><strong>Rank</strong></Col>
          <Col xs={4}><strong>Coins</strong></Col>
          <Col xs={2}><strong>Price</strong></Col>
          <Col xs={2}><strong>24H Change</strong></Col>
          <Col xs={2}><strong>Market Cap</strong></Col>
        </Row>
        {
          displayCoin.slice(0, 10).map((item, index) => (
            <Link to={`/coin/${item.id}`} className="text-decoration-none text-dark" key={index}>
              <Row className="table-row">
                <Col xs={2}>{item.market_cap_rank}</Col>
                <Col xs={4} className="d-flex align-items-center">
                  <img src={item.image} alt={item.name} className="coin-image" />
                  <span>{item.name} - {item.symbol.toUpperCase()}</span>
                </Col>
                <Col xs={2}>{currency.symbol} {item.current_price.toLocaleString()}</Col>
                <Col xs={2} className={item.price_change_percentage_24h >= 0 ? 'text-success' : 'text-danger'}>
                  {Math.floor(item.price_change_percentage_24h * 100) / 100}%
                </Col>
                <Col xs={2}>{currency.symbol} {item.market_cap.toLocaleString()}</Col>
              </Row>
            </Link>
          ))
        }
      </div>
    </Container>
  );
};

export default Home;
