<template>
  <div class="relative overflow-x-auto rounded-lg border">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-800 uppercase bg-gray-50 border-b">
        <tr>
          <th scope="col" class="px-6 py-3" v-for="(item, i) in headers" :key="i" :class="item.classes">
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50"
          v-for="(item, i) in raw"
          :key="i"
        >
          <td class="px-6 py-4" v-for="(head, j) in headers" :key="j" :class="head.classes">
            <slot :name="`item-${head.value}`" v-bind="item">{{ item[head.value] }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    headers: Array,
    items: Array,
  },
  watch: {
    items(newVal) {
      this.raw = newVal
    },
  },
  mounted() {
    this.raw = this.items
  },
}
</script>
