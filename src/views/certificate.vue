<template>
  <div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
  <CertificateItemVue v-for="sertifikat in certificate" :key="sertifikat" :sertifikat="sertifikat"/>
  </div>
</template>

<script setup>
import CertificateItemVue from '../components/card/CertificateItem.vue'
import { sertifikat } from "@/data";
import { ref } from "vue";

const certificate = ref(sertifikat)
console.log(certificate)
</script>

<style>

</style>