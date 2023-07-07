<template>
     <NavAll/>
     <FormComp/>
     <FormLoco/>
</template>
<script>
import NavAll from '@/components/NavBar/NavBarAll.vue';
import FormComp from '@/components/Contact/ContactForm.vue';
import FormLoco from '@/components/Contact/ContactLoc.vue';
export default {
 components:{
  NavAll, FormComp, FormLoco
 }
}
</script>
<style>

    
</style>