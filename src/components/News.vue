<template>
  <div class="m-2">
    <div class="row">
      <div class="col-12">
        <b-jumbotron class="mb-2 px-2" bg-variant="info" text-variant="white" border-variant="dark">
          <template #header>News APP</template>
        </b-jumbotron>
      </div>
    </div>
    <div class="row">
      <b-card
        v-for="(row, index) in news" :key="index"
        overlay
        :title="row.title"
        :img-src="`${assetsUrl}/${row.banner}`"
        img-alt="Image"
        tag="article"
        text-variant="white"
        style="min-heigth: 200px; max-height: 200px"
        class="mb-2"
      >
        <b-card-text>
          {{row.content.substring(0, 500)}}...
        </b-card-text>

        <b-button href="#" variant="primary">Reed more</b-button>
      </b-card>
    </div>
    <div class="row">
      <div class="mt-3">
        <b-pagination
          v-model="pagination.current_page"
          :total-rows="pagination.total"
          :per-page="pagination.per_page"
          align="center"
          pills
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixins/mixin'

export default {
  name: 'News',
  mixins: [
    mixin
  ],
  data() {
    return {
      news: [],
      pagination: {
        current_page: 1
      }
    }
  },
  mounted() {
    console.log(this.fetchData())
  },
  methods: {
    async fetchData() {
      this.axios.get(`/news?page=${this.pagination.current_page}`)
      .then(res => {
        this.news = res.data.data
        this.pagination = res.data.meta
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
  },
  watch: {
    'pagination.current_page': {
      handler: function(value) {
        this.fetchData().catch(error => {
          console.error(error)
        })
      }
    }
  }
}
</script>

<style scoped>
  .card-img {
    height: 200px; 
    object-fit: cover; 
    object-position: 100% 100%;
  }
</style>