<!-- 任务列表组件 -->
<template>
  <ul class="record-list">
    <li v-for="(item, index) in dataInfo.data" :key="index" @click="choice(item, index, dataInfo.type)">
      <i v-if="dataInfo.type == 'doing'" class="fl iconfont" :class="[item.check ? 'icon-checked' : 'icon-unchecked']"></i>
      <div class="fl">
        <p >{{ item.title }}</p>
        <span>{{ item.time || '' }}</span>
      </div>
      <div class="fr" v-if="dataInfo.type != 'doing'">
        <i class="iconfont" :class="[dataInfo.iconName]"></i>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    /**
     * @列表数据 {dataInfo} {Object}
     */
    props: ['dataInfo'],
    methods: {
      /**
       * [choice 勾选卡片]
       * @param  {Object} item  [当前勾选的卡片]
       * @param  {Number} index [卡片下标]
       * @param  {String} type  [列表类型]
       */
      choice (item, index, type) {
        if (type !== 'doing') {
          return false
        } else {
          if (item.check === false) {
            this.$emit('checkChoice', index)
          }
        }
      }
    }
  }
</script>

<style>
  .record-list{
    margin: .88rem .30rem 0;
    padding: .25rem 0 .9rem;
  }
  .record-list>li{
    outline: none;
    margin-bottom: .25rem;
    padding: .2rem;
    height: 1.5rem;
    background: linear-gradient(to right, #8bd5f4 0%, #8fb3f2 100%);
    border-radius: .08rem;
    box-shadow: 0 .04rem .04rem #d7d7d7;
    list-style: none;
    color: #fff;
  }
  .record-list>li>div{
    height: 100%;
    line-height: normal;
  }
  .record-list>li i{
    margin-top: .25rem;
    width: .5rem;
    height: .5rem;
    line-height: 1;
    font-size: .5rem;
    margin-right: .5rem;
  }
  .record-list>li p, .record-list>li span{
    font-size: .32rem;
    line-height: .55rem;
  }
  .record-list>li span{
    display: block;
    font-size: .26rem;
  }
  .record-list>li div.fr {
    margin-top: -.16rem;
  }
  .record-list>li i.icon-complete, .record-list>li i.icon-not {
    font-size: 1rem;
    color: #fff;
    margin-right: 0;
  }
  .record-list>li i.icon-not {
    color: #e5e5e5;
  }
</style>
