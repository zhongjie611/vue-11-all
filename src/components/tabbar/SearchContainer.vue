<template>

<div class="bar bar-header-secondary">
  <link rel="stylesheet" href="//g.alicdn.com/msui/sm/0.6.2/css/sm.css">
  <div class="searchbar">
    <a class="searchbar-cancel">取消</a>
    <div class="search-input">
      <label class="icon icon-search" for="search"></label>
      <input type="search" id='search' placeholder='输入关键字...'/>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
<style>
</style>
