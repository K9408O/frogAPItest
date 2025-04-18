<!-- <template>
    <div style="text-align: center; padding: 20px;">
      <h2>圖片尺寸切換（Options API）</h2>
   -->
      <!-- 綁定圖片寬度 -->
<!--       <img :src="imageUrl" :style="{ width: imageWidth + 'px' }" alt="圖片" />
  
      <div style="margin-top: 20px;">
        <button @click="setSize(100)">小</button>
        <button @click="setSize(200)">中</button>
        <button @click="setSize(300)">大</button>
      </div>
    </div>
  </template> -->
  
<!--   <script>
  import myImage from '../assets/frog.png'  @ 表示 src 目錄（Vite 預設支援）
  
  export default {
    data() {
      return {
        imageUrl: myImage,      本地圖片路徑
        imageWidth: 200         預設寬度
      }
    },
    methods: {
      setSize(size) {
        this.imageWidth = size
      }
    }
  }
  </script>
   -->

  
<template>
    <div style="text-align: center; padding: 20px;">
      <h2>圖片尺寸切換</h2>

      <!-- 綁定圖片寬度 -->
<img :src="imageUrl" :style="{ width: imageWidth + 'px' }" alt="圖片" />
   
      <!-- 按鈕控制大小 -->
<div style="margin-top: 20px;">
        <button @click="setSize(100)">小</button>
        <button @click="setSize(200)">中</button>
        <button @click="setSize(300)">大</button>
      </div>
    </div>
  </template>
   

<script setup>
  import { ref } from 'vue'
  import myImage from '../assets/image/frog.png'
  // 圖片
  const imageUrl = myImage
  
  // 響應式變數控制寬度
  const imageWidth = ref(200) // 預設 200px
  
  // 切換尺寸函式
  function setSize(size) {
    imageWidth.value = size
  }
  </script>