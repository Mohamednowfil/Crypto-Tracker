
# CryptoTracker - Real-Time Cryptocurrency Tracking Web App

CryptoTracker is a premium web application designed to track live cryptocurrency prices, market statistics, and historical trends. It provides users with real-time updates, detailed analytics, and insightful data visualizations to make informed investment decisions.

---

## Features
- 📊 **Real-Time Price Tracking**: Live updates for over 10,000 cryptocurrencies.
- 📈 **Historical Price Charts**: Interactive charts showing 30-day price trends.
- 🌐 **Multiple Currency Support**: Choose your preferred currency (USD, EUR, INR, etc.).
- 🔥 **Trending Coins Section**: Displays the most popular cryptocurrencies.
- 📉 **Detailed Market Analytics**: Market cap, 24h volume, Bitcoin dominance, and more.
- 📱 **Responsive Design**: Seamless experience across desktop and mobile devices.

---

## Tech Stack
- **Frontend**: React.js, Bootstrap
- **Charts**: React Google Charts
- **API**: CoinGecko API for real-time cryptocurrency data
- **Hosting**: [Your Preferred Hosting Platform]

---

## Demo
Check out the live demo: [CryptoTracker Live](https://crypto-tracker-phi-bay.vercel.app/)

---

## Screenshots



## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Mohamednowfil/CryptoTracker.git
```

2. **Navigate to the project directory:**
```bash
cd CryptoTracker
```

3. **Install the dependencies:**
```bash
npm install
```

4. **Start the development server:**
```bash
npm start
```

5. **Open the app in your browser:**
```
http://localhost:3000
```

---

## Configuration
This app uses the CoinGecko API. No API key is required for public endpoints.

If you wish to use a private API key, update the fetch headers in `Coin.jsx`:
```js
const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'YOUR_API_KEY'}
};
```

---

## Usage

- **Select Currency:** Choose your preferred currency from the dropdown menu.
- **Live Search:** Search for your favorite cryptocurrency.
- **Historical Chart:** View the 30-day price trend.
- **Details Page:** Click on a coin to see detailed market analytics and links to official sites.

---

## Folder Structure
```
CryptoTracker
│   README.md
│   package.json
│   .gitignore
│   public
│   └── index.html
└── src
    ├── App.js
    ├── index.js
    ├── assets
    │   └── images
    ├── components
    │   ├── Navbar
    │   ├── Footer
    │   └── LineChart
    ├── pages
    │   ├── Home
    │   └── Coin
    └── context
        └── CoinContext.js
```

---

## Contributing
Contributions are welcome!  
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact
- **Author**: Mohamed Nowfil
- **Twitter**: [@Mohamednowfil23](https://x.com/Mohamednowfil23)
- **LinkedIn**: [Mohamed Nowfil](https://www.linkedin.com/in/mohamednowfil/)

---

## Acknowledgements
- CoinGecko API for providing real-time cryptocurrency data.
- React Google Charts for interactive data visualization.
- Special thanks to all contributors!
