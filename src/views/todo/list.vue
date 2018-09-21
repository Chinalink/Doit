<!-- 任务列表页面 -->
<template>
  <div class="list-wrap">
    <!-- tab选项卡 -->
    <div class="record-header">
      <div class="btn-box">
        <button type="button" name="button"
          v-for="(button, index) in buttons"
          :key="index"
          :class="{'active': index == btnActive}"
          @click="switchList(index)">{{ button.text }}</button>
      </div>
    </div>
    <!-- 列表组件 -->
    <cards v-show="index == btnActive"
      v-for="(item, index) in dataList"
      :key="item.type"
      :dataInfo="item"
      @checkChoice="checkChoice"></cards>
  </div>
</template>

<script>
import cards from '@/components/cards'

export default {
  components: {
    cards
  },
  data () {
    return {
      btnActive: 0, // tab选项卡的高亮index
      buttons: [ // 选项卡列表
        { text: '进行中' },
        { text: '已完成' },
        { text: '未完成' }
      ],
      dataList: [
        { // 进行中数据
          type: 'doing',
          iconName: '',
          data: [
            { title: '每日打卡', time: '2017-07-01 15:30', check: false },
            { title: 'html', time: '2017-07-01 15:30', check: false },
            { title: 'css', time: '2017-07-01 15:30', check: false }
          ]
        },
        { // 已完成数据
          type: 'complete',
          iconName: 'icon-complete',
          data: [
            { title: '每日打卡', time: '2017-07-01 15:30', check: false },
            { title: 'html', time: '2017-07-01 15:30', check: false },
            { title: 'css', time: '2017-07-01 15:30', check: false }
          ]
        },
        { // 未完成数据
          type: 'not',
          iconName: 'icon-not',
          data: [
            { title: '每日打卡', time: '2017-07-01 15:30', check: false },
            { title: 'html', time: '2017-07-01 15:30', check: false },
            { title: 'css', time: '2017-07-01 15:30', check: false }
          ]
        }
      ]
    }
  },
  methods: {
    /**
     * [switchList 切换列表]
     * @param  {Number} index [下标]
     */
    switchList (index) {
      this.btnActive = index
    },
    checkChoice (index) {
      console.log(index)
    }
  }
}
</script>

<style>
  .record-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .88rem;
    background: #fff;
    border-bottom: .02rem solid #e8e8e8;
  }
  .record-header .btn-box {
    margin: 0 auto;
    overflow: hidden;
    display: flex;
  }
  .record-header button {
    flex: 1;
    padding: 0 .85rem;
    float: left;
    border: 0;
    background: none;
    font-size: .24rem;
    line-height: .88rem;
    color: #989898;
  }
  .record-header button.active {
    position: relative;
    color: #419af8;
  }
  .record-header button.active::before {
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: .4rem;
    border: .01rem solid #419af8;
  }
</style>
