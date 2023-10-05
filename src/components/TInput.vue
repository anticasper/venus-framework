<template>
  <div class="border focus:border-indigo-800 hover:border-indigo-600 bg-white rounded-lg w-full flex overflow-hidden">
    <input
      class="border-none focus:outline-none flex-grow p-1 m-1"
      v-model="raw"
      :type="password ? 'password' : 'input'"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
// import TIcon from '@/components/TIcon'
export default {
  components: {
    // TIcon,
  },
  props: {
    modelValue: String,
    placeholder: String,

    password: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    raw: null,
  }),
  watch: {
    raw() {
      this.$emit('update:modelValue', this.raw)
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
