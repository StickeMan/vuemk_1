<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Product name</th>
          <th>Amount</th>
          <th>Price</th>
          <th>Total</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.price }}</td>
          <td>{{ index.getTotal }}</td>
          <td>
            <button class="btn btn-warning" v-on:click="deleteItem(index)">
              Del
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      total: 0,
      subItems:[],
    };
  },
  created() {
    var items_storage = localStorage.getItem("storeUT");
    if (items_storage == null) {
      this.$router.push("/about");
    }
    this.items = JSON.parse(items_storage);
    console.log(this.items);
  },
  computed: {},
  methods: {
    deleteItem(id) {
      if (window.confirm("Are you sure to delete?"));
      {
        console.log(id);
        this.items.splice(id, 1);
        localStorage.setItem("storeUT", JSON.stringify(this.items));
      }
    },
    getTotal() {
      this.total = 0;
      for (var x = 0; x < this.subItems.length; x++) {
        this.total += this.subItems[x].price * this.subItems[x].amount;
      }
    },
  },
};
</script>
