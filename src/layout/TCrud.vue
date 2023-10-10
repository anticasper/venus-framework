<template>
  <TCard class="flex flex-col h-full p-4 shadow-md">
    <div class="h-24">
      <div class="flex content-center items-center">
        <div class="flex-grow">
          <p class="text-2xl">{{ config.head }}</p>
          <TBreadcrumb :list="config.breadcrumb" class="my-4" />
        </div>
        <div class="w-32 text-right">
          <TButton class="px-3" @click="add()">
            <TIcon name="fa-plus fa-sm" regular />
            Adicionar
          </TButton>
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <Transition>
        <TTable :headers="headers" :items="items" class="h-full" :loading="loading">
          <template #item-action="item">
            <div class="exibe-menu">
              <TIcon name="fa-bars" color="black" regular button @click="item.id" />
              <div class="absolute right-8 sub-menu">
                <TCard class="fh-full p-2 shadow-md">
                  <div v-for="(sub, j) in config.children" :key="j">
                    <TButton class="px-3 mb-2" @click="subRoute(item.id, sub)" block> {{ sub.name }} </TButton>
                  </div>
                  <TButton class="px-3 mb-2" @click="edit(item.id)" block> Editar </TButton>
                  <TButton class="px-3 mb-2" @click="remove(item.id)" block> Excluir </TButton>
                </TCard>
              </div>
            </div>
          </template>
        </TTable>
      </Transition>
    </div>
    <div class="h-8 mt-2">
      <TPagination v-model="page" :config="pageConfig" v-if="!loading" />
    </div>
  </TCard>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    config: {
      type: Object,
      default: null,
    },
  },
  computed: {
    ...mapState(['user']),
  },
  data: () => ({
    headers: [],
    items: [],
    pageConfig: {},
    perPage: 10,
    page: 1,
    loading: false,
  }),
  methods: {
    async start() {
      if (this.config.route) {
        const params = {}
        if (this.$route.params.idFather) {
          params[this.config.fatherField] = this.$route.params.idFather
        }
        params.limit = this.perPage
        params.page = this.page
        this.loading = true
        const res = await this.$crud.get(this.config.route, { params })
        this.loading = false
        if (!res || (res.response && res.response.status > 400)) {
          this.$router.push('/login')
          this.$store.dispatch('setUserInfo', null)
        }
        this.items = res.data
        this.headers = []
        this.headers = this.config.headers || [{ text: 'ID', value: 'id', classes: 'text-left' }]
        if (
          !this.headers.find((el) => {
            return el.value === 'action'
          })
        ) {
          this.headers.push({ text: 'Ações', value: 'action', classes: 'w-8 text-center' })
        }
        this.pageConfig = { total: res.total, actual: res.actualPage, perPage: this.perPage }
      }
    },
    add() {
      const route = this.$route.path
      this.$router.push(`${route}/novo`)
    },
    edit(id) {
      const route = this.$route.path
      this.$router.push(`${route}/edit/${id}`)
    },
    subRoute(id, sub) {
      const route = this.$route.path
      this.$router.push(`${route}/${id}/${sub.route}`)
    },
    async remove(id) {
      const res = await this.$crud.remove(this.config.route, id)
      if (res) {
        await this.start()
        this.$store.dispatch('setToasted', {
          active: true,
          text: 'Excluído com sucesso',
          icon: 'fa-check-square',
          color: '#14532do9',
        })
      }
    },
  },
  mounted() {
    if (!this.user) {
      this.$router.push('/login')
      this.$store.dispatch('setUserInfo', null)
    }
    this.start()
  },
  watch: {
    page() {
      this.start()
    },
  },
}
</script>

<style scoped>
.exibe-menu {
  display: relative;
}
.exibe-menu:hover .sub-menu {
  display: block;
}
.sub-menu {
  display: none;
}
</style>
