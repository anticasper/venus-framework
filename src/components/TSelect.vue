<template>
  <div class="border focus:border-indigo-800 hover:border-indigo-600 bg-white rounded-lg w-full relative">
    <div class="border-none focus:outline-none w-full p-1 m-1 flex">
      <div class="flex-grow cursor-pointer" cursor-pointer @click="open = !open">
        {{ rawText ? rawText : placeholder }}
      </div>
      <div class="px-2">
        <TIcon :name="[{ 'fa-angles-down': !open }, { 'fa-angles-up': open }, 'fa-sm']" regular @click="open = !open" />
        <TIcon name="fa-user fa-xmark" v-if="raw" @click="clear" button regular />
      </div>
    </div>
    <Transition>
      <TCard class="w-full shadow-md absolute mt-1 top-full" v-if="open">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="hover:bg-gray-50 border-b p-2 cursor-pointer"
          @click="setValue(item)"
        >
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
    clear() {
      this.raw = null
      this.rawText = this.placeholder
    },
  },
  mounted() {
    const started = this.items.find((el) => {
      return el[this.itemValue] === this.modelValue
    })
    this.setValue(started)
  },
}
</script>

<style></style>
