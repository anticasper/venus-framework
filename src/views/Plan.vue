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
      head: 'Planos',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Planos' }],
      route: 'plan',
    },
  }),
  mounted() {},
}
</script>
