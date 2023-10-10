<template>
  <TForm :config="config"> </TForm>
</template>

<script>
import TForm from '@/layout/TForm'
export default {
  components: {
    TForm,
  },
  data: () => ({
    config: {
      head: 'Usuários',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Usuários' }],
      route: 'user',
    },
  }),
  mounted() {},
}
</script>
