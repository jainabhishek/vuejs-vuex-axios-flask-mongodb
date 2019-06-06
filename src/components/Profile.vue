<template>
  <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">PROFILE</h1>
      </div>
      <table class="table col-md-6 mx-auto">
        <tbody>
          <tr>
            <td>Fist Name</td>
            <td>{{first_name}}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{{last_name}}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{email}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h2 class="title">Check out recent surveys</h2>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
<div class="card" v-for="survey in surveys" v-bind:key="survey.id">
  <div class="card-content">
    <p class="title">{{ survey.name}}</p>
    <p class='subtitle'>{{survey.created_at.toDateString()}}</p>
  </div>
  <div class="card-foooter">
    <router-link :to="`surveys/${survey.id}`" class="card-footer-item">Take Survey</router-link>
  </div>
</div>
    </div>
  </section>
</div>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'
import { mapState } from 'vuex'

export default {
  data () {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      first_name: decoded.identity.first_name,
      last_name: decoded.identity.last_name,
      email: decoded.identity.email
    }
  },

  computed: mapState({
    surveys: state => state.surveys
  }),
  beforeMount () {
    this.$store.dispatch('loadSurveys')
  }
}
</script>
