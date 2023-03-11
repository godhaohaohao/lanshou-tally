<template>
    <div class="money">
            <div class="tags">
            <div class="new">
                <button @click="createTag">新增标签</button>
            </div>
            <ul class="current">
                <li v-for="tag,index in tagList"
                :key="index"
                @click="toggle(tag)"
                :class="{active:selectedTags.indexOf(tag)>=0}"
                >{{ tag.name }}</li>
                
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { TagHelper } from "@/mixins/TagHelper"
import Vue from "vue"
import { mixins } from "vue-class-component"
import {Component,Prop} from 'vue-property-decorator'
@Component
export default class Tags extends mixins(TagHelper){
get tagList(){
    return this.$store.state.tagList
}
created(){
    this.$store.commit('fetchTags')
}
selectedTags:string[] = []
toggle(tag:string){
    const index = this.selectedTags.indexOf(tag)
    if(index >= 0){
        this.selectedTags.splice(index,1)
    }else{
        this.selectedTags.push(tag)
     }
     this.$emit("update:value",this.selectedTags)
    }

}

</script>


<style lang="scss" scoped>

.tags{
    background: rgb(255, 255, 255);
    font-size: 14px;
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    overflow: auto;
    .current{
        display: flex;
        flex-wrap: wrap;
        li{
            $bg:rgb(238, 176, 60);
            background:$bg ;
            $h:24px;
            height: $h;
            line-height: $h;
            border-radius: (24px/2);
            padding: 0 16px;
            margin-right: 12px;
            margin-top: 4px;
            overflow-y: auto;
            &.active{
                background:darken($bg,10%);
                color:white
            }
        }
    }
    .new{
        padding-top: 16px;
        button{
            background: transparent;
            border: none;
            color: #999;
            border-bottom: 1px solid;
            padding: 0 4px;
        }
    }
}
</style>