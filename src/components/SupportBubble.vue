<script setup>
import { ref } from 'vue'
import SupportModal from "@/components/SupportModal.vue"

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}
</script>

<template>
  <div role="button" id="support-bubble" @click="toggleModal">
    Question? Let us help you
  </div>
  <SupportModal v-if="showModal" @close="toggleModal" />
</template>

<style>
#support-bubble {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
}
</style>