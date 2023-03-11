<template>
    <div class="tab-bar">
      <router-link to="/labels" class="link" active-class="linkClick">
        <img src="@/assets/icon/label.png" alt="">
        标签
      </router-link>
        <router-link to="/money" class="link" active-class="linkClick">
          <img src="@/assets/icon/money.png" alt="">
          记一笔
        </router-link>
        <router-link to="/statistics" class="link" active-class="linkClick">
          <img src="@/assets/icon/statistics.png" alt="">
          统计
        </router-link>
    </div>
</template>


<script lang="ts">
export default{

}

</script>


<style lang="scss" scoped>
.tab-bar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
}
.link{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 1;
  text-align: center;
  padding: 10px;
  border-radius: 3px;
  > img{
    text-align: center;
    width: 28px;
    height: 28px;
  }
}

  .link.linkClick{
    background: rgb(255, 166, 0);
    color: gray;
  }
</style>