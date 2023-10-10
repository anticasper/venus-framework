<template>
  <TCrud :config="config"> </TCrud>
</template>

<script>
import TCrud from '@/layout/TCrud'
export default {
  components: {
    TCrud,
  },
  data: () => ({
    config: {
      head: 'Usuários',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Usuários' }],
      route: 'user',
      headers: [
        { text: 'ID', value: 'id', classes: 'w-8' },
        { text: 'Nome', value: 'name' },
        { text: 'E-mail', value: 'email' },
      ],
    },
  }),
  mounted() {},
}
</script>
