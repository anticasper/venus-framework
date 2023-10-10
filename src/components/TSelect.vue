<template>
  <div class="border focus:border-indigo-800 hover:border-indigo-600 bg-white rounded-lg w-full flex relative">
    <div class="border-none focus:outline-none flex-grow p-1 m-1 cursor-pointer" @click="open = !open" :placeholder="placeholder">
      {{ rawText ? rawText : placeholder }}
    </div>
    <Transition>
      <TCard class="w-full shadow-md absolute mt-2 top-full" v-if="open">
        <div v-for="(item, i) in items" :key="i" class="hover:bg-gray-50 border-b p-2 cursor-pointer" @click="setValue(item)">
          <span v-if="typeof item === 'object' && item !== null">
            {{ getText(item) }}
          </span>
          <span v-else>
            {{ item }}
          </span>
        </div>
      </TCard>
    </Transition>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    placeholder: {
      type: String,
      default: '',
    },
    items: Array,
    itemText: {
      type: String,
      default: 'text',
    },
    itemValue: {
      type: String,
      default: 'value',
    },
  },
  data: () => ({
    raw: null,
    rawText: '',
    open: false,
  }),
  watch: {
    raw() {
      this.$emit('update:modelValue', this.raw)
    },
    modelValue(newVal) {
      this.raw = newVal
    },
  },
  methods: {
    setValue(item) {
      if (typeof item === 'object' && item !== null) {
        this.raw = item[this.itemValue]
        this.rawText = `${item[this.itemValue]} - ${item[this.itemText]}`
      } else {
        this.raw = item
        this.rawText = item
      }
      this.open = false
    },
    getText(item) {
      if (typeof item === 'object' && item !== null) {
        return item[this.itemText]
      } else {
        return item
      }
    },
  },
  mounted() {
    this.raw = this.modelValue
  },
}
</script>

<style></style>
