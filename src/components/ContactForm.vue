<script setup>
// get the current domain
const domain = window.location.hostname;
const embedUrl = `https://maiden.customedge.co/tickets/create?domain=${domain}`;

</script>

<template>
<iframe :src="embedUrl" width="100%" height="750px" frameborder="0"></iframe>
</template>

<style scope>
    iframe {
        border: 1px solid #eee;
        border-radius: 10px;
    }
</style>
