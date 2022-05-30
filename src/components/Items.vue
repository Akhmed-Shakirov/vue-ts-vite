<template>
    <h1>{{ $t('msg') }}</h1>
    <p>{{ text }}</p>
</template>

<script setup lang="ts">

defineProps<{ text: string }>()

</script>

<style lang="scss">
</style>
