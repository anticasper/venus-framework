<template>
  <div class="border focus:border-indigo-800 hover:border-indigo-600 bg-white rounded-lg w-full flex overflow-hidden">
    <input class="border-none focus:outline-none flex-grow p-1 m-1" v-model="raw" />
  </div>
</template>

<script>
// import TIcon from '@/components/TIcon'
export default {
  components: {
    // TIcon,
  },
  props: {
    value: String,
  },
  data: () => ({
    raw: null,
  }),
  watch: {
    raw() {
      this.$emit('update:modelValue', this.raw)
    },
  },
  mounted() {
    this.raw = this.value
  },
}
</script>

<style></style>
