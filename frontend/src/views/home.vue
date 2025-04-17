<template>
    <div class="container">
      <h2>Vue 表單送出到 Node 後端</h2>
      <input v-model="inputText" placeholder="輸入一些內容..." /><!-- v-model做雙向綁定將 <input> 的內容綁定到變數inputText上 -->
      <button @click="submit">送出</button>
  
      <div v-if="response">
        <h3>後端回應：</h3>
        <p>{{ response }}</p>
      </div>
    </div>
    <hr>
    <button @click="getSentence">取得今日鱷鱷語錄</button>

    <div v-if="sentence">
    <h3>今日語錄：</h3>
    <p>{{ sentence }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const inputText = ref('')
  const response = ref('')

  //點擊送出後執行,node.js使用網址去打API
   //不是因為「函式名稱叫 submit」就對應 app.post('/submit')，
   //而是因為你 主動在 fetch 裡呼叫了那個網址 /submit然後後端剛好有「監聽這個路徑的 POST 請求」
   
  const submit = async () => {
    const res = await fetch('http://localhost:3000/submit', {//發送 POST 請求到 Node.js 後端,submit對應後端app.post('/submit',...
      method: 'POST',//正確 URL，並配合後端的路由結構
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: inputText.value })// 傳送 JSON 格式資料
    })
 
    
    const data = await res.json()// 接收後端的json回應
    response.value = data.received // 顯示在畫面上
  }

  const sentence = ref('')

    const getSentence = async () => {
    const res = await fetch('http://localhost:3000/sentence') // 呼叫後端的 GET API
    const data = await res.json()
    sentence.value = data.sentence // 顯示句子
}
  </script>
  
  <style scoped>
  .container {
    max-width: 500px;
    margin: auto;
    padding-top: 100px;
  }
  
  input {
    padding: 8px;
    width: 80%;
    margin-right: 8px;
  }
  
  button {
    padding: 8px 16px;
  }
  </style>
  