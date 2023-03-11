<template>
    <div class="money">
        <Tags @update:value="record.tags = $event"/>
        <div class="from-item">
            <Notes field-name="备注"
            placeholder="在这里输入备注"
            :value.sync="record.notes"
/>
        </div>
          <Tabs :data-source="recordTypeList"
                :value.sync="record.type"          
          />
        <NumberPads 
        @update:value="onUpdateAmount"
        @submit="saveRecord"
        />
    </div>
</template>


<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import Tags from '@/components/money/Tags.vue'
import Notes from '@/components/money/Notes.vue'
import NumberPads from '@/components/money/NumberPads.vue'
import recordTypeList from '@/constant/recordTypeList'
import Tabs from '@/components/Tabs.vue'



@Component({
    components:{
        Tags,
        Notes,
        Tabs,
        NumberPads
    },
})
export default class Money extends Vue{
    get recordList(){
        return this.$store.state.recordList
    }
    record:RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
}
recordTypeList = recordTypeList

created(){
    this.$store.commit('fetchRecords')
}
    onUpdateNotes(value:string){
        this.record.notes = value
    }
    onUpdateAmount(value:string){
        this.record.amount = parseFloat(value)
    }
    saveRecord(){
        if(!this.record.tags || this.record.tags.length === 0){
           return window.alert('请至少选择一个标签')
        }
        this.$store.commit("createRecord",this.record)
        if(this.$store.state.createRecordError === null){
            window.alert('以保存')
            this.record.notes = ''
        }
    }
}
</script>


<style lang="scss" scoped>
    .money{
        display: flex;
        flex-direction: column;
        height: calc(100vh - 72px);
        overflow: auto;
    }
    .from-item{
        padding: 12px 0;
        background-color: #f5f5f5;
    }
</style>