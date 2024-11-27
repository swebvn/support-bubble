<script setup>
const props = defineProps({
  show: Boolean,
  urls: Object,
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <transition name="fade">
    <div v-if="show" id="support-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <!-- close button -->
        <span class="close" @click="closeModal">&times;</span>
        <strong style="text-transform: uppercase;">How can we help you?</strong>
        <p>Contact us and let us know how we can help you.</p>
        <ul>
          <li><a :href="urls.faqs">FAQs</a></li>
          <li><a :href="urls.contact">CONTACT US NOW</a></li>
          <li><a :href="urls.tracking">TRACKING ORDER</a></li>
          </ul>
        <p>
          Thank you for your interest our stuff. <br>
          If you have any problem <strong>PLEASE CONTACT US FIRST</strong>, We will support your issue ASAP
        </p>
      </div>
    </div>
  </transition>
</template>

<style>
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
}

.modal-content {
  position: relative;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 300px;
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
  cursor: pointer;
}

a {
  color: blue;
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