<template>
  <div class="relative overflow-x-auto rounded-lg border">
    <TLoadingBar v-if="loading" />
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-800 uppercase bg-gray-50 border-b">
        <tr>
          <th scope="col" class="px-6 py-3" v-for="(item, i) in rawHeader" :key="i" :class="item.classes">
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50" v-for="(item, i) in raw" :key="i">
          <td class="px-6 py-4" v-for="(head, j) in rawHeader" :key="j" :class="head.classes">
            <slot :name="`item-${head.value}`" v-bind="item">{{ item[head.value] }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: () => ({
    raw: [],
    rawHeader: [],
  }),

  props: {
    headers: Array,
    items: Array,
    loading: { type: Boolean, default: false },
  },
  watch: {
    items(newVal) {
      this.raw = newVal
    },
    headers(newVal) {
      this.rawHeader = newVal
    },
  },
  mounted() {
    this.raw = this.items
    this.rawHeader = this.headers
  },
}
</script>
