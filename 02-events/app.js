const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: 'Alex',
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log('Submitted!');
    },
    setName(event) {
      this.name = event.target.value;
    },
    add() {
      this.counter = this.counter + 1;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
  }
});

app.mount('#events');
