<template>
  <div class="index">
    <img class="index-bg" src="../assets/images/banner.jpg">
    <div class="index-topbox">
      <div class="index-topbox-radius">
        <div class="index-topbox-text">
          <h3>{{ welcomeWord }}</h3>
          <p>
            <span>{{ date.month }}</span><span>{{ date.day }}</span><span>{{ date.week }}</span><span>{{ date.year }}</span>
          </p>
        </div>
      </div>
      <router-link class="button button-error" :to="{ name: 'todoList' }">Do it</router-link>
      <span class="tip">{{ tips }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        welcomeWord: '',
        tips: '',
        date: {
          year: '',
          month: '',
          week: '',
          day: ''
        }
      }
    },
    created () {
      this.init()
    },
    methods: {
      init () {
        this.setDate()
        this.setWelcomeWord()
        this.setTips()
      },
      setDate () {
        const now = new Date()
        const Month = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec' ]
        const Week = [ 'MON', 'TUSE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN' ]
        this.date.month = Month[now.getMonth()] + '.'
        this.date.day = now.getDate()
        this.date.week = Week[now.getDay() - 1]
        this.date.year = now.getFullYear()
      },
      setWelcomeWord () {
        const now = new Date()
        const hh = now.getHours()
        const time = [ 3, 6, 8, 11, 13, 17, 19, 23 ]
        const text = [ '深夜咯', '早上好', '上午好', '中午好', '下午好', '日暮里', '晚上好', '夜深了' ]
        time.map((item, index, arr) => {
          if (arr[0] <= hh && hh <= arr[arr.length - 1]) {
            if (item <= hh && hh <= arr[index + 1]) {
              this.welcomeWord = text[index]
            }
          } else {
            this.welcomeWord = text[arr.length - 1]
          }
        })
      },
      setTips () {
        const now = new Date()
        const tips = [
          '习惯就是人生的最大指导',
          '我们坚持一件事情，并不是因为这样做了会有效果，而是坚信，这样做是对的',
          '凡不能杀死你的，终使你更加强大',
          '要从容地着手去做一件事，但一旦开始，就要坚持到底',
          '向着某一天终于要达到的那个终极目标迈步还不够，还要把每一步骤看成目标，使它作为步骤而起作用',
          '一个人只要强烈地坚持不懈地追求，他就能达到目的',
          '要在这个世界上获得成功，就必须坚持到底：至死都不能放手'
        ]
        this.tips = tips[now.getDay() - 1]
      }
    }
  }
</script>

<style>
  .index, .index .index-topbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .index>img.index-bg {
    width: 100%;
    height: 100%;
  }
  .index .index-topbox{
    position: absolute;
    background: rgba(206, 202, 202, 0.2);
  }
  .index .index-topbox-radius{
    margin: 3rem auto 0;
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    border: .08rem solid rgba(255, 255, 255, 0.5);
  }
  .index .index-topbox .index-topbox-text {
    margin-top: 1.4rem;
    margin-left: 1.4rem;
    width: 2.7rem;
    height: 2.7rem;
  }
  .index .index-topbox h3 {
    padding: .25rem 0;
    font-family: "宋体";
    font-size: .75rem;
    color: #fff;
    text-align: center;
    letter-spacing: .1rem;
  }
  .index .index-topbox .button-error {
    display: block;
    margin: .8rem auto 0;
    width: 2.7rem;
    height: .7rem;
    line-height: .7rem;
    border-radius: .7rem;
    box-shadow: 1px -1px #ff1a1a;
    font-size: .34rem;
    color: #fff;
  }
  .index .index-topbox p {
    padding: .15rem 0;
    border-top: .02rem solid #fff;
    border-bottom: .02rem solid #fff;
    font-size: .24rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
  }
  .index .index-topbox p span {
    margin-right: .05rem;
  }
  .index .index-topbox span.tip {
    padding: 0 .25rem;
    margin-top: 1.2rem;
    display: block;
    font-size: .22rem;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
  }
  .index .index-topbox p span:last-child {
    margin-left: .1rem;
    color: #fff;
  }
</style>
