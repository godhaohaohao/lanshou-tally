<template>
    <div class="NotFound">
        <h2>您要找的页面不存在</h2>
        <button @click="toHome">返回首页</button>
    </div>
</template>


<script lang="ts">

export default {
methods:{
    toHome(){
        ((this as any).$router).push("/")
    }
}

}

</script>


<style scoped>

</style>