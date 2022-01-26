<script>
import {ref} from "vue"
export default {
  setup( ){
    const datas = ref([]);
    let message = ref('');
    const addData = function(){
      if (message.value)
      datas.value.push(message.value);
      message.value = '';
    }
    return{
      datas,
      message,
      addData
    }

  },
}
</script>
<template>
<header class="p-10 bg-blue-200">
<h1 class="text-center text-[3rem] text-gray-700">TODO list</h1>
</header>
<section id="creater" class="mt-4 mb-1">
<form class="text-center">
  <label class= " w-5/6 block mx-auto space-y-2" for="todo-create">
    <h2 class="text-3xl tracking-[.35rem]">請填寫代辦事項:</h2>
  
  <input type="text" id="todo-create" class="w-full border-2 border-gray-400 rounded-md px-2 py-1 text-xl " placeholder=" " v-model="message"/>
  <input type="submit" value="提交" @click.prevent="addData" v-bind:disabled="message == ''" class="py-3 w-full bg-green-600 rounded-md text-center text-2xl text-gray-100 hover:bg-green-700 active:translate-y-1"/>
  </label>
</form>
</section>
<section id="reader" class="mt-12 space-y-4">
<div  
v-for="(data,index) in datas"
:key="index" class=" w-9/12 flex px-3 mx-auto justify-between items-center border-2 border-gray-300 rounded-md">
  <h2 class=" "> {{data}}</h2>
  <font-awesome-icon class=" text-red-600  " icon="times-circle" @click="datas.splice(index,1)" />
</div>
</section>
<footer class="uppercase text-center fixed bottom-0 inset-x-0 mt-8"> power by 月光無風</footer>

</template>

<style>

</style>
