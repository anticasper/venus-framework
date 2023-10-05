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
      head: 'Programas',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Programas' }],
      route: 'program',
    },
  }),
  mounted() {},
}
</script>
