<template>
  <div class="flex content-center items-center justify-center h-screen bg-gray-600">
    <TCard :class="['w-3/12', 'p-4', { tremor: buzz }]">
      <div class="flex justify-center mb-2">
        <img src="../assets/logo-venus.png" class="h-16" />
      </div>
      <h1 class="text-3xl mb-3">Login</h1>
      <TInput v-model="object.email" class="mb-3" placeholder="usuario@email.com" />
      <TInput v-model="object.password" class="mb-3" password />
      <TButton block class="text-center" @click="login()">Logar</TButton>
    </TCard>
  </div>
</template>

<script>
import TInput from '@/components/TInput'
import TButton from '@/components/TButton'
import TCard from '@/components/TCard'

export default {
  components: {
    TInput,
    TButton,
    TCard,
  },
  data: () => ({
    object: {},
    buzz: false,
  }),
  methods: {
    async login() {
      const res = await this.$crud.insert('login', this.object)
      if (res.status === 200 && res.data) {
        this.$store.dispatch('setUserInfo', res.data)
        this.$router.push('/')
      } else {
        this.buzz = true
        setTimeout(() => {
          this.buzz = false
        }, 500)
      }
    },
  },
}
</script>

<style></style>
