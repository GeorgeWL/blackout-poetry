
<script setup lang="ts">
import type { BlackoutWord } from '@/types';
import TextBlock from './TextBlock.vue';
const props = defineProps<{ wordsArray: BlackoutWord[] }>();
</script>

<template>
    <h2>Preview</h2>
    <TextBlock>
        <ul class="unstyled-list">
            <li v-for="word in props.wordsArray" :key="word.id">
                <span :class="{ blackout: word.disabled }">{{ word.label }}</span>
            </li>
        </ul>
    </TextBlock>
</template>