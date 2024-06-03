<template>
  <div class="card-container mt-14">
    <div class="card-content  w-[350px] shadow bg-[#151515] rounded-lg  mx-auto p-2">
        <div class="card-img">
            <img class="rounded-lg" :src="sertifikat.imageUrl" alt="">
        </div>
        <div class="card-title">
            <h1 class="text-xl font-bold text-green-500 mt-5">{{ sertifikat.name }}</h1>
        </div>
        <div class="card-description mt-2">
            <h1 class="text-gray-400">{{ sertifikat.description }}</h1>
            <p class="italic text-green-500 mb-2">Diterima : {{ sertifikat.tanggal }}</p>
        </div>
        <Button>Detail</Button>
    </div>
  </div>
</template>

<script setup>
import Button from "../Button.vue";
import { defineProps } from "vue";

const {sertifikat} = defineProps(['sertifikat'])
</script>

<style>

</style>