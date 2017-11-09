<template>
  <ul class="record-list">
    <li v-for="item in cardsData">
      <div class="fl">
        <p >{{ item.title }}</p>
        <span>{{ item.time || '' }}</span>
      </div>
      <div class="fr">
        <i class="iconfont" :class="[className]"></i>
      </div>
    </li>

  </ul>
</template>

<script>
  export default {
    /**
     * @icon图标 {className} {String}
     * @cards数据 {cardsData} {Array}
     */
    props: ['className', 'cardsData']
  }
</script>

<style>
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
