const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goal: '',
    };
  },
  // computed: {
  //   goalCount() {
  //     return this.goals.length;
  //   }
  // },
  methods: {
    addGoal() {
      if(this.goal) this.goals.push(this.goal);
      console.log(this.goals)
    }
  }
});

app.mount('#user-goals');
