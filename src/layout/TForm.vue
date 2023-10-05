<template>
  <TCard class="h-full p-4" v-for="(item, i) in form" :key="i">
    <h1 class="text-2xl ml-1">{{ item.name }}</h1>
    <div class="flex flex-wrap border-t border-b py-4 my-4">
      <div v-for="(field, j) in item.children" :key="j" :class="field.classes + ' p-1'">
        <div class="mb-2 ml-2">
          <b>{{ field.label }}</b>
        </div>
        <TInput v-model="object[field.name]" :placeholder="field.placeholder" />
      </div>
    </div>
    <TButton @click="save()">Salvar</TButton>
  </TCard>
</template>

<script>
import TCard from '@/components/TCard'
import TInput from '@/components/TInput'
import TButton from '@/components/TButton'
import { mapState } from 'vuex'

export default {
  components: {
    TCard,
    TInput,
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
      }
    },
    async save() {
      const res = await this.$crud.insert(this.config.route, this.object)
      if (res && res.response && res.response.status !== 200) {
        console.log(res.response.data)
      } else {
        this.$router.go(-1)
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
}
</script>

<style></style>
