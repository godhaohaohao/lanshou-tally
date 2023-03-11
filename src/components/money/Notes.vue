<template>
            <div class="notes">
            <label>
                <span class="name">{{fieldName}}</span>
                <input :value="value"
                @input="onValueChanged($event?.target?.value)"
                type="text" :placeholder="placeholder">
           </label>
        </div>
</template>


<script lang="ts">
import Vue from "vue"
import {Component,Prop,Watch} from "vue-property-decorator";

@Component
export default class Notes extends Vue{
@Prop({default:''}) value!:string
@Prop({required:true}) fieldName!:string
@Prop() placeholder?:string

onValueChanged(Value:string){
this.$emit("update:value",Value)
}
}

</script>


<style lang="scss" scoped>
.notes{
    font-size: 14px;
    padding: 0 16px;

  .name{
    padding-right:16px;
  }
  input{
    height: 40px;
    background: transparent;
    border: none;
    width: 70vw;
  }  
}
</style>