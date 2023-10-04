<template>
  <TCard class="flex flex-col h-full p-4">
    <div class="h-24">
      <div class="flex content-center items-center">
        <div class="flex-grow">
          <p class="text-2xl">{{ config.head }}</p>
          <TBreadcrumb :list="config.breadcrumb" />
        </div>
        <div class="w-32 text-right">
          <TButton>
            <TIcon name="fa-plus fa-sm" class="mr-3" regular />
            Adicionar
          </TButton>
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <TTable :headers="headers" :items="items">
        <template #item-action="item">
          <TIcon name="fa-bars" color="black" regular button @click="item.id" />
        </template>
      </TTable>
    </div>
    <div class="h-8">Paginação</div>
  </TCard>
</template>

<script>
import TCard from '@/components/TCard'
import TIcon from '@/components/TIcon'
import TButton from '@/components/TButton'
import TTable from '@/components/TTable'
import TBreadcrumb from '@/components/TBreadcrumb'

export default {
  components: {
    TCard,
    TIcon,
    TTable,
    TBreadcrumb,
    TButton,
  },
  props: {
    config: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    headers: [
      { text: 'Nome', value: 'name' },
      { text: 'Nível', value: 'level' },
      { text: 'Linguagens', value: 'lang' },
      { text: 'Ações', value: 'action', classes: 'w-8 text-center' },
    ],
    items: [],
  }),
  methods: {
    async start() {
      if (this.config.route) {
        const res = await this.$crud.get(this.config.route)
        this.items = res.data
      }
    },
  },
  mounted() {
    this.start()
  },
}
</script>
