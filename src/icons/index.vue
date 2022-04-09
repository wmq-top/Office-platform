<!--
 * @Author: Geeker
 * @Date: 2022-03-19 00:08:51
 * @LastEditors: Geeker
 * @LastEditTime: 2022-03-31 23:33:15
 * @Description: 
-->
<template>
    <svg :class="svgClass" v-bind="$attrs" :style="{ color: color }">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script setup>
import { computed } from 'vue'
// 这里是可以不使用defineProps的作为默认vue3将其props默认作包装
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: ''
    }
})

const iconName = computed(() => `#icon-${ props.name }`)
const svgClass = computed(() => {
    if(props.name) return `svg-icon icon-${ props.name }`
    return 'svg-icon'
})
</script>

<style scoped>
.svg-icon{width: 1em;height: 1em;fill:currentColor; vertical-align: middle;}
</style>