<template>
  <div>
    <div class="record-banner">
      <div class="tab-box">
        <button type="button" class="active">待完成</button>
        <button type="button">已完成</button>
      </div>
    </div>
    <ul class="record-list">
      <li v-for="item in recordNav" @click="choice(item)">
        <i class="fl iconfont" :class="[item.check ? 'icon-checked' : 'icon-unchecked']"></i>
        <div class="fl">
          <p >{{ item.title }}</p>
          <span>{{ item.time || '' }}</span>
        </div>
      </li>
    </ul>
    <dm-footer fixed></dm-footer>
  </div>
</template>
<script>
  import footNav from '../components/footer/footer.vue'

  export default {
    data () {
      return {
        recordNav: [
          { title: '每日打卡', time: '2017-07-01 15:30', check: false },
          { title: 'html', time: '2017-07-01 15:30', check: false },
          { title: 'css', time: '2017-07-01 15:30', check: false },
          { title: 'jquery', time: '2017-07-01 15:30', check: false },
          { title: 'javascript', time: '2017-07-01 15:30', check: false },
          { title: '每日打卡', time: '2017-07-01 15:30', check: false },
          { title: 'html', time: '2017-07-01 15:30', check: false },
          { title: 'css', time: '2017-07-01 15:30', check: false },
          { title: 'jquery', time: '2017-07-01 15:30', check: false },
          { title: 'javascript', time: '2017-07-01 15:30', check: false }
        ]
      }
    },
    methods: {
      choice (item) {
        if (item.check === false) {
          item.check = true
        }
      }
    },
    components: {
      'dm-footer': footNav
    }
  }
</script>
<style>
  .record-banner{
    width: 100%;
    height: 3.52rem;
    background: url('../assets/top_banner.jpg') no-repeat;
    background-size: contain;
  }
  .record-banner .tab-box {
    padding-top: .3rem;
    text-align: center;
  }
  .record-banner .tab-box button{
    margin: 0 .2rem;
    background: none;
    border:0;
    font-size: .32rem;
    color: rgba(255, 255, 255, 0.5);
  }
  .record-banner .tab-box button.active{
    color: #fff;
  }
  .record-list{
    margin: 0 .89rem;
    padding: 0;
  }
  .record-list>li{
    margin: .25rem 0 0 0;
    padding: .2rem;
    height: 1.5rem;
    line-height: 1.1rem;
    background: #1faff6;
    list-style: none;
    border-radius: .06rem;
    color: #fff;
  }
  .record-list>li>div{
    height: 100%;
    line-height: normal;
  }
  .record-list>li i{
    font-size: .5rem;
    margin-right: .3rem;
  }
  .record-list>li p, .record-list>li span{
    font-size: .36rem;
    line-height: .55rem;
  }
  .record-list>li span{
    font-size: .28rem;
  }
</style>
