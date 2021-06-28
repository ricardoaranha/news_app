export default {
    computed: {
        axios() {
            return this.$root.axios.create({
                baseURL: this.$root.env.API_URL,
              })
        },
        assetsUrl() {
            return this.$root.env.ASSETS_URL
        }
    }
}