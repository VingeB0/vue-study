const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: 'Alex',
      lastName: 'Dalex',
      fullname: '-'
    };
  },
  watch: {
    counter(value) {
        if (value > 50) {
            this.counter = 0;
        }
    }
    // name(value, oldValue) {
    //   this.fullname = 'Value:' + value
    // }
  },
  computed: {
    fullName() {
      return this.name + ' ' + this.lastName
    }
  },
  methods: {
    outPutFullName() {
      return 'Your name is: ' + this.name
    },
    reset() {
      this.name = '';
    },
    // setName(event, lastName) {
    //   this.reset();
    //   this.name = event.target.value;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
