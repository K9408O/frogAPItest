
<template>
   <div class="layout"> <!-- 導覽列固定在上方 -->
    <nav class="nav">
    <button @click="$router.push('/')">Home</button>
    <button @click="$router.push('/page1')">Page1</button>
    <button @click="$router.push('/page2')">Page2</button>
    <button @click="$router.push('/page1')">Page1</button>
 
 
    </nav>
    <hr />
    <main class="content">
    <router-view/>
    </main>
  </div>

</template>


<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


</style>