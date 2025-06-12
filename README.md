# 天氣查詢 App

這是一個使用 Vue 3 並串接 OpenWeatherMap API 的天氣查詢應用。  
可以查詢指定城市的即時天氣與五日天氣預報，並顯示溫度、天氣描述及對應的天氣圖示。

---

## 功能特色

- 支援中文城市名稱查詢（透過城市名稱轉換函式）
- 顯示即時天氣資訊（溫度、天氣狀況、天氣圖示）
- 顯示五日天氣預報（每日最高溫、天氣描述及圖示）
- 根據天氣狀況改變背景色彩，提升視覺體驗
- 載入狀態與錯誤訊息處理

---

## 專案結構

- `App.vue`：主應用組件，負責資料抓取與狀態管理
- `components/SearchForm.vue`：搜尋欄位元件，讓使用者輸入城市名稱
- `components/WeatherInfo.vue`：顯示即時天氣資訊
- `components/WeatherForecast.vue`：顯示五日天氣預報
- `components/ErrorMessage.vue`：錯誤訊息顯示元件
- `utils/cityMap.js`：城市名稱轉換工具
