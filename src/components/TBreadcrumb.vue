<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex content-center items-center space-x-1 md:space-x-3 text-gray-400 text-sm">
      <li class="inline-flex content-center items-center" v-for="(item, i) in list" :key="i">
        <TIcon :name="item.icon" solid class="fa-sm" v-if="item.icon"></TIcon>
        <b v-if="i === list.length - 1">{{ item.text }}</b>
        <span v-else>{{ item.text }}</span>
        <TIcon name="fa-chevron-right fa-2xs" solid v-if="i < list.length - 1"></TIcon>
      </li>
    </ol>
  </nav>
</template>

<script>
import TIcon from '@/components/TIcon'

export default {
  components: {
    TIcon,
  },
  props: {
    list: {
      type: Array,
      default: null,
    },
  },
}
</script>
