<template>
  <TCard class="flex flex-col h-full p-4 shadow-md">
    <TLoadingBar v-if="loading" />
    <div v-for="(item, i) in form" :key="i">
      <div class="flex content-center items-center">
        <div class="flex-grow">
          <h1 class="text-2xl ml-1">{{ item.name }}</h1>
          <TBreadcrumb :list="config.breadcrumb" class="my-4" />
        </div>
        <div class="text-right flex">
          <TButton class="px-3 mr-2" @click="back()">
            <TIcon name="fa-angles-left fa-sm mr-2" regular />
            Voltar
          </TButton>
          <TButton @click="save()" class="px-3">
            <TIcon solid name="fas fa-save" class="mr-2" />
            Salvar
          </TButton>
        </div>
      </div>

      <div class="flex flex-wrap border-t border-b py-4 my-4">
        <div v-for="(field, j) in item.children" :key="j" :class="field.classes + ' p-1'">
          <div class="mb-2 ml-2">
            <b>{{ field.label }}</b>
          </div>
          <TInput v-model="object[field.name]" :placeholder="field.placeholder" v-if="field.type === 1" />
          <TInput v-model="object[field.name]" :placeholder="field.placeholder" password v-if="field.type === 2" />
          <TCheckbox v-model="object[field.name]" :placeholder="field.placeholder" v-if="field.type === 3" />
          <TSelect
            v-model="object[field.name]"
            :placeholder="field.placeholder"
            :items="field.database"
            v-if="field.type === 4"
            itemValue="id"
            itemText="name"
          />
        </div>
      </div>
      <div class="text-right flex">
        <TButton class="px-3 mr-2" @click="back()">
          <TIcon name="fa-angles-left fa-sm mr-2" regular />
          Voltar
        </TButton>
        <TButton @click="save()" class="px-3">
          <TIcon solid name="fas fa-save" class="mr-2" />
          Salvar
        </TButton>
      </div>
    </div>
  </TCard>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user']),
  },
  props: {
    config: Object,
  },
  data: () => ({
    loading: false,
    form: [],
    object: {},
    items: [],
    test: null,
  }),
  methods: {
    async start() {
      if (this.config.route) {
        this.loading = true
        const res = await this.$crud.get('form', { params: { route: this.config.route } })
        this.loading = false
        if (!res) {
          this.$router.push('/login')
          this.$store.dispatch('setUserInfo', null)
        }
        this.form = res.data
        if (this.$route.params && this.$route.params.id) {
          const raw = await this.$crud.get(this.config.route, { params: { ...this.$route.params } })
          if (raw.data) {
            this.object = raw.data[0]
          }
        }
      }
    },
    async save() {
      let res = null
      if (this.$route.params.idFather) {
        this.object.idFather = this.$route.params.idFather
      }

      if (this.$route.params.id) {
        delete this.object.id
        delete this.object.createdAt
        delete this.object.updatedAt
        delete this.object.deletedAt

        res = await this.$crud.update(this.config.route, this.$route.params.id, this.object)
      } else {
        res = await this.$crud.insert(this.config.route, this.object)
      }
      if (res && (res.status === 200 || res.status === 204)) {
        this.$router.go(-1)
      }
    },
    back() {
      this.$router.go(-1)
    },
  },
  mounted() {
    if (!this.user) {
      this.$router.push('/login')
      this.$store.dispatch('setUserInfo', null)
    }
    this.start()
  },
}
</script>

<style></style>
