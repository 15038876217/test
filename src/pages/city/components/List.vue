<template>
<div class="list" ref="wrapper">
    <div>
        <div class="area">
           <div class="title border-bottom">当前城市</div>
           <div class="button-list">
               <div class="button-wrapper">
                   <div class="button">北京</div>
               </div>
           </div>
        </div>
        <div class="area">
           <div class="title border-bottom">热门城市</div>
           <div class="button-list">
               <div class="button-wrapper">
                   <div class="button">北京</div>
               </div>
           </div>
        </div>
        <div class="area">
           <div class="title border-bottom">A</div>
           <div class="item-list">
               <div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>

               <div class="item border-bottom">
                   A
               </div><div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>

               <div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>

               <div class="item border-bottom">
                   A
               </div>
               <div class="item border-bottom">
                   A
               </div>
           </div>
        </div>
    </div>
</div>
</template>
<script>
import Bscroll from 'better-scroll'
// better-scroll
export default {
    name: 'CityList',
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.78rem
    right: 0
    left: 0
    bottom: 0
    .title
      line-height: .54rem
      padding-left: .2rem
      background: #eee
      color: #666
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #cccccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>