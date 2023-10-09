<template>
  <div class="w-full flex content-center items-center cursor-pointer px-2" @click="raw = !raw">
    <div :class="[...classes, { 'bg-indigo-600': raw }]"></div>
    <div class="flex-grow">{{ placeholder }}</div>
    <!-- <input class="border-none focus:outline-none flex-grow p-1 m-1" v-model="raw" :type="password ? 'password' : 'input'" :placeholder="placeholder" /> -->
  </div>
</template>

<script>
// import TIcon from '@/components/TIcon'
export default {
  components: {
    // TIcon,
  },
  props: {
    modelValue: Boolean,
    placeholder: String,

    password: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    classes: ['w-5', 'h-5', 'border', 'focus:border-indigo-800', 'hover:border-indigo-600', 'mr-2', 'rounded', 'p-1'],
    raw: false,
  }),
  watch: {
    raw() {
      if (this.raw) {
        this.$emit('update:modelValue', 1)
      } else {
        this.$emit('update:modelValue', 0)
      }
    },
    modelValue(newVal) {
      this.raw = newVal
    },
  },
  mounted() {
    this.raw = this.modelValue
  },
}
</script>

<style></style>
