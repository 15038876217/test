<template>
<div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page,index) of pages" :key="index">
      <div class='icons-item' v-for="item in page" :key="item.id">
        <div class="icons-img">
           <img class='icons-img-content' :src="item.imgUrl" alt="">
        </div>
        <p class='icons-desc'>{{item.desc}}</p>
      </div>
    </swiper-slide>
  </swiper> 
</div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return { 
       swiperOption: {
        autoplay: false
      }  
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
.icons-item
    position: relative
    width: 25%
    height: 0
    padding-bottom: 25%
    float: left 
    overflow: hidden
    .icons-img
       position: absolute
       left: 0 
       top: 0
       right: 0
       bottom: 0.44rem
       box-sizing: border-box
       padding: .1rem
       .icons-img-content
           height: 100%
           display: block
           margin: 0 auto
    .icons-desc
        line-height: 0.44rem
        height: 0.44rem
        text-align: center
        position: absolute
        left: 0 
        right: 0
        bottom: 0
        color: $darkTextColor
</style>
