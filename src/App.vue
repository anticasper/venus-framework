<template>
  <TApp>
    <TAppShell v-if="user">
      <template v-slot:header-right>
        <TIcon name="fa-bell" class="mr-4" color="black" regular button />
        <TIcon name="fa-user" color="black" regular button />
        Diovanni Souza
        <TIcon name="fa-chevron-down" color="black" regular button />
      </template>
      <router-view />
    </TAppShell>
    <router-view v-if="!user" />

    <TToast />
  </TApp>
</template>

<script>
import TApp from '@/components/TApp'
import TIcon from '@/components/TIcon'
import TAppShell from '@/shell/TAppShell'

import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    TApp,
    TAppShell,
    TIcon,
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    start() {
      if (!this.user) {
        const logged = this.$crud.get('me')
        if (logged) {
          this.$store.dispatch('setUserInfo', logged)
          this.$router.push('/')
        } else {
          this.$router.push('/login')
        }
      }
    },
  },
  mounted() {
    this.start()
  },
}
</script>
