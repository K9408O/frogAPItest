<template>
    <div style="padding: 20px;">
      <input v-model="inputText" placeholder="請輸入內容..." />
      <button @click="showText">確認</button>
  
      <div v-if="outputText">
        <p>你輸入的是：{{ outputText }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // 建立雙向綁定用的變數
  const inputText = ref('')
  const outputText = ref('')
  
  // 點按鈕後顯示內容
  function showText() {
    outputText.value = inputText.value
  }
  </script>