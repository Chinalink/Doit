<template>
  <div>
    <div class="record-header">
      <div class="btn-box">
        <button type="button" name="button" v-for="(button, index) in buttons" :class="{'active': button.active}" @click="switchList(index)">{{ button.text }}</button>
      </div>
    </div>
    <!-- 进行中 -->
    <ul class="record-list" v-show="buttons[0].active">
      <li v-for="item in doingList" @click="choice(item)">
        <i class="fl iconfont" :class="[item.check ? 'icon-checked' : 'icon-unchecked']"></i>
        <div class="fl">
          <p >{{ item.title }}</p>
          <span>{{ item.time || '' }}</span>
        </div>
      </li>
    </ul>
    <!-- 已完成 -->
    <dm-cards className="icon-complete" :cardsData="completeList" v-show="buttons[1].active"></dm-cards>
    <!-- 未完成 -->
    <dm-cards className="icon-not" :cardsData="notList" v-show="buttons[2].active"></dm-cards>
    <dm-footer fixed></dm-footer>
  </div>
</template>
<script>
  import footNav from '../components/footer/footer.vue'
  import cards from '../components/cards/cards.vue'

  export default {
    data () {
      return {
        buttons: [
          { text: '进行中', active: true },
          { text: '已完成', active: false },
          { text: '未完成', active: false }
        ],
        doingList: [  // 进行中数据
          { title: '每日打卡', time: '2017-07-01 15:30', check: false },
          { title: 'html', time: '2017-07-01 15:30', check: false },
          { title: 'css', time: '2017-07-01 15:30', check: false }
        ],
        completeList: [ // 已完成数据
          { title: '每日打卡', time: '2017-07-01 15:30', check: false },
          { title: 'html', time: '2017-07-01 15:30', check: false },
          { title: 'css', time: '2017-07-01 15:30', check: false }
        ],
        notList: [ // 未完成数据
          { title: '每日打卡', time: '2017-07-01 15:30', check: false },
          { title: 'html', time: '2017-07-01 15:30', check: false },
          { title: 'css', time: '2017-07-01 15:30', check: false }
        ]
      }
    },
    methods: {
      switchList (index) {
        this.buttons.forEach((item) => {
          item.active = false
        })
        this.buttons[index].active = true
      },
      /**
       * [choice 勾选进行中的项目]
       * @param  {[type]} item [当前勾选的卡片]
       */
      choice (item) {
        if (item.check === false) {
          item.check = true
        }
      }
    },
    components: {
      'dm-footer': footNav,
      'dm-cards': cards
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
</style>
