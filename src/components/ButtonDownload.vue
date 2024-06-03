<template>
  <button @click="downloadFile" class="bg-green-400 hover:bg-green-500 duration-300 font-sm text-[#151515] px-2 py-1 rounded-sm">
    <slot></slot>
  </button>
</template>

<script>
export default {
    methods:{
        downloadFile(){
            const fileUrl = '/cv.pdf';
            const fileName = 'CV.pdf';

            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = fileName;
      
      // Menambahkan elemen ke DOM, mengkliknya, dan menghapusnya kembali
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
</script>

<style>

</style>