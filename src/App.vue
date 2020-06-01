<template>
  <div id="app">
    <div id="nav">
       <Header/>
    
    </div>
    
    
  </div>
</template>
<script>

import Header from './views/Header';
export default {
  name: 'App',
 components: {
   Header,
 }
}
</script>
<style >
*{ 
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
 }
</style>