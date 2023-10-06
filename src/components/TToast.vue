<template>
  <Transition>
    <TCard
      class="absolute p-2 right-3 bottom-3 shadow-md"
      v-if="active"
      :style="`color: ${toasted.color ?? '#000000'}; background-color: ${
        toasted.back ? toasted.back : '#FFFFFFF'
      } !important;`"
    >
      <TIcon :name="toasted.icon ? toasted.icon : 'fa-wine-glass-alt'" solid />
      <span class="mx-2"> {{ toasted.text }} </span>
      <TIcon name="fa-times-circle" solid button @click="active = false" v-if="toasted.closeable" />
    </TCard>
  </Transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['toasted']),
  },
  watch: {
    toasted() {
      if (this.toasted.active) {
        this.active = true
        setTimeout(() => {
          this.active = false
        }, 3000)
      }
    },
  },
  data: () => ({
    active: false,
  }),
  mounted() {
    // this.active = true
  },
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
