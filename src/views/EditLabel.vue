<template>
    <div class="edit-label">
        <div class="navBar">
            <img @click="goBack" class="leftIcon" src="@/assets/icon/left.png" alt="">
            <span class="title">编辑标签</span>
            <span class="rightIcon"></span>
        </div>
        <div class="form-wrapper">
            <Notes :value="tag?.name" @update:value="update" field-name="标签名" placeholder="请输入标签名" />
        </div>
        <div class="button-wrapper">
            <Button @click="remove">删除标签</Button>
        </div>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import Notes from '@/components/money/Notes.vue';
import Button from '@/components/Button.vue'

@Component({
    components:{Notes,Button},
})
export default class EditLabel extends Vue{
    get tag(){
        return this.$store.state.currentTag
    }
    created(){
        const id = this.$route.params.id
        this.$store.commit('fetchTags')
        this.$store.commit("setCurrentTag",id)
         if(!this.tag){
            this.$router.replace('/404')
         }

    }
    update(name:string){
        if(this.tag){
        this.$store.commit('updateTag',{id:this.tag.id,name})
        }
    }
    remove(){
        if(this.tag){
          this.$store.commit("removeTag",this.tag.id)
        }
    }
    goBack(){
        this.$router.back()
    }
    
}

</script>


<style lang="scss" scoped>

.navBar{
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title{
        font-family: var(--font-hei);
    }
    .leftIcon{
        width: 1em;
       height: 1em;
       width: 24px;
       height: 24px;
    }
    .rightIcon{
        width: 24px;
       height: 24px;

    }
}
.form-wrapper{
    background: white;
    margin-top: 8px;
    background:#f5f5f5;

}
.button-wrapper{

    background-color: white;
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
}
</style>