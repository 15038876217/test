<template>
<<<<<<< HEAD
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class='icon-img'>
            <img class='icon-img-content' :src='item.imgUrl' />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

=======
<div class="icons">
  <swiper> 
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
>>>>>>> origin/index-recommend
<script>
export default {
  name: 'HomeIcons',
  data () {
<<<<<<< HEAD
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '景点热门'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '滑雪季'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '景点热门'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '滑雪季'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '景点热门'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '滑雪季'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '景点热门'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '景点热门'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '景点热门'
      }]
    }
=======
      return {
          iconList: [{
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '景点门票'
          }, {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            desc: '一日游'
          }, {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '上海必游'
          }, {
            id: '0004',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
            desc: '游乐场' 
          }, {
            id: '0005',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ea/01d081dacb03cc02.png',
            desc: '赏秋色' 
          }, {
            id: '0006',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png',
            desc: '普陀山'  
          }, {
            id: '0007',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
            desc: '上海欢乐谷'  
          }, {
            id: '0008',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
            desc: '动物园'  
          }, {
            id: '0009',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
            desc: '动物园'  
          }]
      }
>>>>>>> origin/index-recommend
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
<<<<<<< HEAD

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
=======
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
>>>>>>> origin/index-recommend
</style>
