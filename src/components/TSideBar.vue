<template>
  <aside :class="[...classes, { 'slide-in': active }, { 'slide-out': !active }]" aria-label="Sidebar" :style="`background: var(--bg-color);`" v-show="active">
    <div class="flex-grow">
      <slot name="content"></slot>
    </div>
    <div class="h-max">
      <slot name="footer"></slot>
    </div>
  </aside>
</template>

<script>
export default {
  data: () => ({
    // classes: ['w-64', 'h-fit', 'transition-transform', 'sm:translate-x-0', 'p-4', 'text-white', 'flex', 'flex-col'],
    classes: ['w-64', 'h-fit', 'p-4', 'text-white', 'flex', 'flex-col'],
  }),
  props: {
    color: String,
    active: Boolean,
  },
  watch: {
    active() {
      this.classes = ['w-64', 'h-fit', 'p-4', 'text-white', 'flex', 'flex-col']
    },
  },
}
</script>
