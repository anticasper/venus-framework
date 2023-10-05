<template>
  <div>
    <TCard class="h-full p-4" v-for="(item, i) in form" :key="i">
      <h1 class="text-2xl ml-1">{{ item.name }}</h1>
      <div class="flex flex-wrap border-t border-b py-4 my-4">
        <div v-for="(field, j) in item.children" :key="j" :class="field.classes + ' p-1'">
          <div class="mb-2 ml-2">
            <b>{{ field.label }}</b>
          </div>
          <TInput v-model="object[field.name]" :placeholder="field.placeholder" v-if="field.type === 1" />
          <TInput v-model="object[field.name]" :placeholder="field.placeholder" password v-if="field.type === 2" />
          <TCheckbox v-model="object[field.name]" :placeholder="field.placeholder" password v-if="field.type === 3" />
        </div>
      </div>
      <div>
        <TButton @click="save()" class="px-2">
          <TIcon solid name="fas fa-save" class="mr-2" />
          Salvar
        </TButton>
        <TButton @click="back()" class="px-2 ml-2"> Voltar </TButton>
      </div>
    </TCard>
  </div>
</template>

<script>
import TCard from '@/components/TCard'
import TInput from '@/components/TInput'
import TIcon from '@/components/TIcon'
import TCheckbox from '@/components/TCheckbox'
import TButton from '@/components/TButton'
import { mapState } from 'vuex'

export default {
  components: {
    TCard,
    TInput,
    TIcon,
    TCheckbox,
    TButton,
  },
  computed: {
    ...mapState(['user']),
  },
  props: {
    config: Object,
  },
  data: () => ({
    form: [],
    object: {},
  }),
  methods: {
    async start() {
      if (this.config.route) {
        const res = await this.$crud.get('form', { params: { route: this.config.route } })
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
      if (this.$route.params) {
        delete this.object.id
        delete this.object.createdAt
        delete this.object.updatedAt
        delete this.object.deletedAt

        await this.$crud.update(this.config.route, this.$route.params.id, this.object)
      } else {
        await this.$crud.insert(this.config.route, this.object)
      }
      if (res && res.response && res.response.status !== 200) {
        console.log(res.response.data)
      } else {
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
