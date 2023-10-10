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
      headers: [
        { text: 'ID', value: 'id', classes: 'w-8' },
        { text: 'Nome', value: 'name' },
      ],
    },
  }),
  mounted() {},
}
</script>
