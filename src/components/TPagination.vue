<template>
  <div class="flex justify-end text-sm">
    <div class="border rounded-lg py-2 flex mr-2" v-if="page > 1 || page < raw.total / raw.perPage">
      <div class="px-2" v-if="page > 1"><TIcon solid name="fa-angle-left" button @click="previousPage()" /></div>
      <div class="px-2" v-if="page < raw.total / raw.perPage">
        <TIcon solid name="fa-angle-right" button @click="nextPage()" />
      </div>
    </div>
    <div class="border rounded-lg p-2">
      <b>{{ (raw.actual - 1) * raw.perPage + 1 }}-{{ Math.min(raw.actual * raw.perPage, raw.total) }}</b>
      de {{ raw.total }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: Number,
    config: Object,
  },
  data: () => ({
    page: 1,
    raw: {
      actual: 0,
      perPage: 0,
      total: 0,
    },
  }),
  computed: {
    maxItems() {
      return 1 //this.config.actual * this.config.perPage
    },
  },
  methods: {
    previousPage() {
      this.page--
      this.setPage()
    },
    nextPage() {
      this.page++
      this.setPage()
    },
    setPage() {
      this.$emit('update:modelValue', this.page)
    },
  },
  mounted() {
    this.raw = this.config
  },
  watch: {
    page(value) {
      this.page = value
      this.raw = this.config
      this.raw.actual = value
    },
    config(value) {
      this.raw = value
    },
  },
}
</script>

<style></style>
