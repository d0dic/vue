
<template>
    <div>
        <h1>Welcome {{ userName }}</h1>

        <HelloWorld msg="Vite + Vue on TS" />
    </div>
</template>

<script setup lang="ts">

    import { HelloWorld } from 'ui-kit'
    // import 'ui-kit/style.css'

    defineProps<{ userName?: string }>()

</script>

<style scoped></style>