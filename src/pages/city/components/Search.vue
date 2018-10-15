<template>
  <div class="search">
      <input type="text" class="search-input" placeholder="输入城市名称拼音">
  </div>
</template>
<script>
export default {
    name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height: .72rem
  background: $bgColor
  padding: .1rem
  .search-input
    box-sizing: border-box 
    height: .62rem
    text-align: center
    border-radius: .06rem
    width: 100%
    line-height: .62rem
    color: #666
    padding: 0 .01rem
</style>
