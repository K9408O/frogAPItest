// backend/index.js
// 建立 Express 應用程式
const express = require('express')
const app = express()
// 載入中介軟體（middleware）
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 3000

// 使用 middleware
app.use(cors())                 // 允許跨網域請求
app.use(bodyParser.json())     // 支援 JSON 格式的 POST 資料


app.get('/', (req, res) => {
    res.send('<h1>這是 Node 後端首頁</h1>');
});


// 接收 Vue 傳來的 POST 資料 (前端fetch的submit) // 後端監聽「POST 到 /submit」的請求
app.post('/submit', (req, res) => {
    const { message } = req.body // 取得從前端傳來的 JSON 資料
    console.log('收到來自 Vue 的訊息:', message)

    res.json({ status: 'success', received: message })// 回傳 JSON 給前端
})

// ✅ 新增 API：GET /sentence
app.get('/sentence', (req, res) => {
    const sentences = [
        '今天星期一 鱷鱷買新衣',
        '今天星期二 鱷鱷肚子餓',
        '今天星期三 鱷鱷去爬山',
        '今天星期四 鱷鱷去考試',
        '今天星期五 鱷鱷去跳舞'
    ]// 這裡可以是隨機、固定索引、照時間選擇都可以
    // 隨機取一句
    const index = Math.floor(Math.random() * sentences.length)
    res.json({ sentence: sentences[index] })
})
app.listen(port, () => {
    console.log(`後端伺服器啟動：http://localhost:${port}`)
})