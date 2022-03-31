<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">StoreUT</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMain"
        aria-controls="navbarMain"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMain">
        <ul class="navbar-nav">
          <li class="navbar-item" v-if="!user.loggedIn">
            <router-link to="login" class="navbar-link active"
              >Log in</router-link
            >
          </li>
          <li class="navbar-item">
            <router-link
              to="home"
              class="navbar-link active"
              v-if="user.loggedIn"
              >Home</router-link
            >
          </li>
          <li class="navbar-item">
            <router-link to="about" class="navbar-link" v-if="user.loggedIn"
              >Search</router-link
            >
          </li>
          <li class="navbar-item">
            <router-link to="logout" class="navbar-link" v-if="user.loggedIn"
              >Log out</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
//import firebase from '@/firebase';
export default {
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>
