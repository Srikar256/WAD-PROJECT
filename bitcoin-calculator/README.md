# Bitcoin Investment Calculator 💹

A simple and interactive Bitcoin Investment Calculator built using **HTML**, **CSS**, **AngularJS**, **Bootstrap**, **D3.js**, and **NVD3 charts**.

This web application allows you to:
- View the current Bitcoin price in USD (fetched live from BitPay API)
- Calculate how much your investment grows if BTC reaches a target price
- Convert USD to BTC instantly
- Visualize Bitcoin historical price data (2010 onwards)
- Smoothly navigate through sections like Home, About, and Contact

---

## 🚀 Features

### 📌 Live Bitcoin Price Fetching
The app uses the BitPay Rates API to get the current Bitcoin price:
- The rate is fetched and displayed on the homepage.
- Used for all investment & conversion calculations.
(Implemented in `main.js`)

### 📌 Investment Projection Table
See how your investment grows when:
- BTC reaches $1,000  
- BTC reaches $5,000  
- BTC reaches $10,000  
- BTC reaches $25,000  
- BTC reaches $50,000  

All values are auto-calculated based on your **Initial Investment**.

### 📌 USD → BTC Converter
Instantly converts your entered USD amount to Bitcoin.

### 📌 Historical Price Chart
A dynamic NVD3 line chart displays Bitcoin’s price history from **2010–2012**, powered by:
- `prices.js` (large dataset)
- D3.js
- NVD3 Library

### 📌 Smooth Scrolling Navigation
Clicking Home/About/Contact scrolls smoothly to the section (in `main.js`).

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Structure of the web app |
| **CSS3 / Bootstrap / Bootswatch Yeti** | Styling and responsive layout |
| **AngularJS** | Dynamic functionality + data binding |
| **BitPay API** | Live BTC price |
| **D3.js** | Data visualization |
| **NVD3.js** | Line chart for historical BTC data |

---

## 📂 Project Structure

📦 Bitcoin Calculator
├── index.html # Main UI page
├── main.css # Complete styling & theme
├── main.js # AngularJS logic / API / converter
├── prices.js # Historical BTC price dataset
└── wadpic3.png # Bitcoin image used on the site

<img width="980" height="384" alt="image" src="https://github.com/user-attachments/assets/04060d72-a107-4331-aed3-203061785a68" />
<img width="991" height="295" alt="image" src="https://github.com/user-attachments/assets/a0ccbdf2-bf91-43c6-8787-7cd060e02895" />
<img width="917" height="386" alt="image" src="https://github.com/user-attachments/assets/769eb37d-6275-469d-a083-8ca3c24ac3ed" />
<img width="917" height="273" alt="image" src="https://github.com/user-attachments/assets/89bdfc72-e561-438c-a9ad-37f0d0cb6b9d" />
<img width="602" height="384" alt="image" src="https://github.com/user-attachments/assets/9998a232-54b8-4d97-bb33-c68455d7e413" />

📨 Contact
For queries or improvements:
Email: saisrikar256@gmail.com
Mobile: 9494925256

📄 License
This project is open-source and free to use under the MIT License.
