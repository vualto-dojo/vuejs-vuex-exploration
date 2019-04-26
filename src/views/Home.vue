<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Contact :contact="contact" v-for="contact in contacts" :key="contact.id"></Contact>
    <pre>
      {{ contacts }}
    </pre>
    <button @click="handleMutation">Mutate</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Contact from "@/components/Contact.vue";
import store from "@/store";

export default {
  name: "home",
  components: {
    HelloWorld, Contact
  },
  computed: {
    contacts() {
      return store.state.contacts;
    }
  },
  methods: {
    handleMutation() {
      store.dispatch('changeNumber', {id:1, newNumber:"12345"});
    }
  }
};
</script>
