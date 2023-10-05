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
      head: 'Grupo',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Grupos' }],
      route: 'group',
    },
  }),
  mounted() {},
}
</script>
