<template>
  <div class="about">
    <Header />
    <div class="about-content">
      <h1>This is an about page</h1>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default {
  name: "about",
  components: {
    Header, 
    Footer
  }
}
</script>

<style>
.about {
    display: flex;
    flex-flow: column;
    height: 100vh;
  }

  .header {
    flex: 0 1 auto;
  }

  .about-content {
    flex: 1 1 auto;
  }

  .footer {
    flex: 0 1 auto;
  }
</style>
