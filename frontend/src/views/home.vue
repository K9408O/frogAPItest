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
  import { submitMessage, fetchSentence } from '@/services/api' //@ 代表的是 /src 資料夾 ,{}中引用在services上需要用到的方法
  import '@/assets/styles/base.css'

  const inputText = ref('')
  const response = ref('')
  const sentence = ref('')

  const submit = async () => {
  const data = await submitMessage(inputText.value)//從services呼叫方法傳入(inputText.value)fetch傳送POST請求
  response.value = data.received//把回傳的JSON 資料，存入 data 把 data.received 顯示到畫面上
}//response.value	顯示在畫面上的變數,data.received把回傳文字抓出來顯示

const getSentence = async () => {
  const data = await fetchSentence()
  sentence.value = data.sentence
}
  </script>
  

  