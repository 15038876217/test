<template>
<div class="wrapper">
<swiper :options="swiperOption">
    <swiper-slide v-for="item in imgList" :key='item.id'>
        <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      imgList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/b8/16b0e9c77a76e102.jpg_750x200_4863de12.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/9b/8f79dbd1e0941302.jpg_750x200_55829659.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  width: 100%
  height: 0
  overflow: hidden
<<<<<<< HEAD
  padding-bottom: 27.25%
=======
  padding-bottom: 26.25%
>>>>>>> origin/index-recommend
  .swiper-img
    width: 100%
</style>
