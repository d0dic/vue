<script lang="ts">

import { Header as UiHeader } from 'ui-kit'

export default {
  name: 'my-app',

  components: { UiHeader },

  data(): { user: null | { name: string } } {
    return {
      user: null,
    };
  },

  methods: {
    onLogin() {
      this.user = { name: 'Jane Doe' };
    },
    onLogout() {
      this.user = null;
    },
    onCreateAccount() {
      this.user = { name: 'Jane Doe' };
    },
  },
};
</script>

<template>

  <ui-header :user="user" @login="onLogin" @logout="onLogout" @createAccount="onCreateAccount" />

  <nav>
    <RouterLink class="logo" to="/"> Home</RouterLink>
    <RouterLink class="logo" to="/about">About</RouterLink>

    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
