<template>
  <form>
    <h1 class="text-3xl mb-3">Login</h1>
    <TInput v-model="object.email" class="mb-2" />
    <TInput v-model="object.password" class="mb-2" />
    <TButton block class="text-center" @click="login()">Logar</TButton>
  </form>
</template>

<script>
import TInput from '@/components/TInput'
import TButton from '@/components/TButton'

export default {
  components: {
    TInput,
    TButton,
  },
  data: () => ({
    object: {},
  }),
  methods: {
    async login() {
      const data = await this.$crud.insert('login', this.object)
      console.log(data)
    },
  },
}
</script>

<style></style>
