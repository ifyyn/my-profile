<template>
    <div class="navbar justify-between m-4 md:block xl:flex">
        <div class="nav-brand text-green-500 cursor-pointer">
            <Logo/>
        </div>
        <div class="nav-menu xl:mt-0 mt-6 w-full md:block md:w-auto" :class="{'hidden': !openToggle}">
            <ul class="flex flex-col md:flex-row md:space-x-8 gap-3">
                <li class="">
                    <RouterLink active-class="active" to="/" class="text-white">Home</RouterLink>
                </li>
                <li class="">
                    <RouterLink active-class="active" to="/certificate" class="text-white">Certificate</RouterLink>
                </li>
                <ButtonDownload>Download CV</ButtonDownload>
            </ul>
        </div>
    </div>
    <div class="toggle xl:hidden absolute right-4 top-4 text-white" @click="toggleMenu">
        <Toggle/>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import Logo from '../components/icon/Logo.vue'
import Toggle from '../components/icon/Toggle.vue'
import ButtonDownload from './ButtonDownload.vue';
export default{
    components:{
        Logo,
        RouterLink,
        Toggle,
        ButtonDownload
    },
    data(){
        return{
            openToggle:false
        };
    },
    methods:{
        toggleMenu(){
            this.openToggle = !this.openToggle;
        }
    }
}

</script>

<style scoped>
    .active{
        color: #4fc65f;
    }
</style>