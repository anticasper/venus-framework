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
      head: 'Formulários',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Formulários' }],
      route: 'form',
      children: [{ route: 'field', name: 'Campos' }],
    },
  }),
  mounted() {},
}
</script>
