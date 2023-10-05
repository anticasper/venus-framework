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
      head: 'Formulário',
      breadcrumb: [{ text: 'Home' }, { text: 'Administração' }, { text: 'Formulário' }],
      route: 'form',
    },
  }),
  mounted() {},
}
</script>
