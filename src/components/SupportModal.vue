<script setup>
import { ref } from 'vue';
import ContactForm from './ContactForm.vue';

const props = defineProps({
  show: Boolean,
  urls: Object,
})

const emit = defineEmits(['close'])

const showContactForm = ref(false)

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <transition name="fade">
    <div v-if="show" id="support-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <!-- close button -->
        <span class="close" @click="closeModal">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </span>

        <strong style="text-transform: uppercase;">How can we help you?</strong>
        <p>Contact us and let us know how we can help you.</p>
        <a class="button button-secondary" :href="urls.faqs">FAQs</a>
        <a class="button button-secondary" :href="urls.tracking">TRACKING ORDER</a>
        <a class="button button-primary" @click="showContactForm = !showContactForm">CONTACT US NOW</a>
        <ContactForm v-show="showContactForm" />
        <p>
          Thank you for your interest our stuff. <br>
          If you have any problem <strong>PLEASE CONTACT US FIRST</strong>, We will support your issue ASAP
        </p>
      </div>
    </div>
  </transition>
</template>

<style scoped>
#support-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6969;
}

.modal-content {
  position: relative;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  min-width: 300px;
  width: 100%;
  text-align: left;
  line-height: 2rem;
}

@media screen and (min-width: 768px) {
  .modal-content {
    width: 696px;
  }
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: black;
  cursor: pointer;
}

.close svg {
  width: 24px;
  height: 24px;
}

.button {
  display: block;
  width: 100%;
  padding: 6px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;
}

a {
  text-decoration: none;
}

.button-primary {
  background-color: black;
  color: white;
}

.button-secondary {
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
}

.button:hover {
  opacity: 0.8;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.32s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>