<script setup>
import { ref } from 'vue';
import SupportModal from './components/SupportModal.vue';

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}
</script>

<template>
  <button role="button" id="support-bubble" @click="toggleModal">
    Question? Let us help you
  </button>
  <SupportModal :show="showModal" :urls="{
    faqs: '/customer-help',
    contact: '/contact-us',
    tracking: '/tracking-order'
  }" @close="toggleModal" />
</template>

<style scoped>
button#support-bubble {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 14px;
  cursor: pointer;
  border: 0;
  outline: 0;
  z-index: 100;
}
</style>