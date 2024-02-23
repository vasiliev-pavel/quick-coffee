<template>
    <Collapsible v-model:open="isOpen" class="extand">
        <CollapsibleTrigger>Sugar</CollapsibleTrigger>
        <CollapsibleContent class="extand_content">
            <span>1 oz</span>
            <span>2 oz</span>
            <span>3 oz</span>
        </CollapsibleContent>
    </Collapsible>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>

<style>
.extand {
    display: flex;
    flex-direction: column;
}
</style>