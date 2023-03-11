<template>
        <button  class="createTag" 
        @click="$emit('click',$event)">
            <slot></slot>
        </button>
</template>


<script setup>


</script>


<style lang="scss" scoped>
.createTag{
    background: #767676;
    color: white;
    border-radius: 4px;
    height: 40px;
    padding: 0 16px;
    border: none;
    &-wrapper{
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
    }
}
</style>