# 🌤️ 天氣查詢 App

這是一個使用 Vue 3 並串接 OpenWeatherMap API 的天氣查詢應用。  
可以查詢指定城市的即時天氣與五日天氣預報，並顯示溫度、天氣描述及對應的天氣圖示。

---

## ✨ 功能特色

- 支援中文城市名稱查詢（透過城市名稱轉換函式）
- 顯示即時天氣資訊（溫度、天氣狀況、天氣圖示）
- 顯示五日天氣預報（每日最高溫、天氣描述及圖示）
- 根據天氣狀況改變背景色彩，提升視覺體驗
- 載入狀態與錯誤訊息處理

---

## 🗂️ 專案結構

- `App.vue`：主應用組件，負責資料抓取與狀態管理
- `components/SearchForm.vue`：搜尋欄位元件，讓使用者輸入城市名稱
- `components/WeatherInfo.vue`：顯示即時天氣資訊
- `components/WeatherForecast.vue`：顯示五日天氣預報
- `components/ErrorMessage.vue`：錯誤訊息顯示元件
- `utils/cityMap.js`：城市名稱轉換工具

---

# 🌤️ Weather Forecast App

A simple Vue 3 application that fetches and displays current weather and 5-day forecast using the OpenWeatherMap API.  
Search for any city (supports Chinese names converted to English), view temperature, weather descriptions, and icons, all with a nice dynamic background!  

---

## ✨ Features

- Search weather by city name (with city name conversion utility)  
- Display current weather: temperature, description, and weather icon  
- Show 5-day weather forecast with daily temps and icons  
- Dynamic background changes based on weather conditions  
- Loading spinner and error handling for smooth user experience  

---

## 🗂️ Project Structure

- `App.vue` — main app, handles API calls and state management  
- `components/SearchForm.vue` — input form for city search  
- `components/WeatherInfo.vue` — displays current weather details  
- `components/WeatherForecast.vue` — shows 5-day forecast  
- `components/ErrorMessage.vue` — displays error messages  
- `utils/cityMap.js` — utility to convert city names  
