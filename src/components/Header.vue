<script>
 

export default {
     props: ['title','className'],
  setup(props){
      const title =props.title;
      const className =props.className;
      
     return { title,className };
    }
    
  
}
</script>

<style>

</style>
<template>
 
<header :class="className">
<h1 class="text-center text-[3rem] text-gray-700"> {{title}}</h1>
</header>
</template>