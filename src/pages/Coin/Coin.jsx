import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/Navbar/LineChart/LineChart';
import './Coin.css'

const Coin = () => {
  const { coinid } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-qiZp6QCFW4WgTUvMrmdXpptn',
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinid}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-qiZp6QCFW4WgTUvMrmdXpptn',
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=${currency.name}&days=30`,
      options
    )
      .then((res) => res.json())
      .then((res) => setHistoricalData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (coinData && historicalData) {
    return (
      <div className="container my-5 text-light">
        <div className="text-center mb-4">
          <img
            src={coinData.image.large}
            alt={coinData.name}
            className="img-fluid"
            style={{ width: '80px' }}
          />
          <h2>
            {coinData.name} - {coinData.symbol.toUpperCase()}
          </h2>
        </div>

        <div className="mb-4">
          <LineChart historicalData={historicalData} />
        </div>

        <div className="text-center mb-4">
          <a
            href={coinData.links.homepage}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Website
          </a>
        </div>

        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="p-3 bg-dark rounded">
              <h5>Coin Rank</h5>
              <p>{coinData.market_cap_rank}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-dark rounded">
              <h5>Current Price</h5>
              <p>
                {currency.symbol}{' '}
                {coinData.market_data.current_price[currency.name].toLocaleString()}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-dark rounded">
              <h5>Market Cap</h5>
              <p>
                {currency.symbol}{' '}
                {coinData.market_data.market_cap[currency.name].toLocaleString()}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-dark rounded">
              <h5>FDV</h5>
              <p>
                {currency.symbol}{' '}
                {coinData.market_data.fully_diluted_valuation[currency.name].toLocaleString()}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-dark rounded">
              <h5>Total Supply</h5>
              <p>{coinData.market_data.total_supply}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-dark rounded">
              <h5>Max Supply</h5>
              <p>
                {coinData.market_data.max_supply || 'No Max Supply'}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-dark rounded">
              <h5>Circulating Supply</h5>
              <p>{coinData.market_data.circulating_supply}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-dark rounded">
              <h5>24 Hour High</h5>
              <p>
                {currency.symbol}{' '}
                {coinData.market_data.high_24h[currency.name].toLocaleString()}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-dark rounded">
              <h5>24 Hour Low</h5>
              <p>
                {currency.symbol}{' '}
                {coinData.market_data.low_24h[currency.name].toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 text-light">
        <div>Loading...</div>
      </div>
    );
  }
};

export default Coin;
