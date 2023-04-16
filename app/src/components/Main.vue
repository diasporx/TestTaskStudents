<template>
  <div class="container">

    <h1 class="mb-20">Список заявлений</h1>

    <!--    Search-->
    <div class="search-box">
      <div class="layout">
        <iconSearch class="iconSearch"/>
        <input type="text" v-model="searchTerm" class="search" placeholder="Поиск">
      </div>
    </div>
    <!--    Search-->

    <!--    table-->
    <Table :data="filteredData"/>
    <!--    table-->

  </div>
</template>

<script>
import iconSearch from '@/components/__include/icons/search'
import { mapState, mapMutations, mapActions } from 'vuex';
import Table from '@/components/Table'

export default {
  name: 'Main',
  components: {iconSearch, Table},
  data() {
    return {
      searchTerm: localStorage.getItem('searchTerm') || '',
    }
  },
  computed: {
    ...mapState(['data', 'sortOrder', 'sortColumn']),
    filteredData() {
      return this.data.filter(item => {
        return item.name.includes(this.searchTerm) || item.date.includes(this.searchTerm);
      });
    }
  },
  methods: {
    ...mapMutations(['updateSearchTerm', 'setSortOrder']),
    ...mapActions(['sortData']),
    handleSort(column) {
      if (this.sortColumn === column) {
        this.setSortOrder({ sortOrder: this.sortOrder === 'asc' ? 'desc' : 'asc', sortColumn: column });
      } else {
        this.setSortOrder({ sortOrder: 'asc', sortColumn: column });
      }
      this.sortData();
    }
  },
  beforeMount() {
    const sortOrder = localStorage.getItem('sortOrder')
    const sortColumn = localStorage.getItem('sortColumn')
    this.$store.commit('setSortOrder', {
      sortOrder: sortOrder || '',
      sortColumn: sortColumn || ''
    });
    if(this.$store.state.sortColumn === 'Score') {
      console.log('Score')
      this.$store.commit('sortDataByTotalScore', { data: this.$store.state.data, getters: this.$store.getters })
      this.$store.commit('sortDataByTotalScore', { data: this.$store.state.data, getters: this.$store.getters })
    } else if(this.$store.state.sortColumn === 'Procent') {
      this.$store.commit('sortDataByPercentage', { data: this.$store.state.data, getters: this.$store.getters })
      this.$store.commit('sortDataByPercentage', { data: this.$store.state.data, getters: this.$store.getters })
    } else {
      this.sortData();
    }
  },
  watch: {
    searchTerm: {
      handler(newValue) {
        this.$store.commit('updateSearchTerm', this.searchTerm)
      },
      deep: true
    },
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/colors.scss';

.container {
  padding-top: 48px;
  padding-bottom: 40px;
}

.search-box {
  display: flex;
  background-color: $white;
  border: 1px solid $blue-super-light;
  border-radius: 4px;

  .layout {
    margin: 16.5px 16px;
    display: flex;
    width: 100%;

    .iconSearch {
      margin-right: 8px;
    }

    input.search {
      width: 100%;
      font-family: 'Proxima Nova', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      box-shadow: none;
      outline: none;
      border: none;
    }
  }
}
</style>
