/*global Vue*/
/*global axios*/
/*global fetch*/
var app = new Vue({
  el: '#app',
  data: {
    currentAdvice: '',
    goodAdvice: [],
    awesome: false,
  },
  methods: {
    getAdvice() {
      this.awesome = false
      var url = "http://lucamilion.com:3000/advice"
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((advice) => {
          console.log(advice);
          this.currentAdvice = advice.slip.advice
        });
    },
    addAdviceToBase() {
      console.log("adding")
      var url = "http://lucamilion.com:3000/goodadvice";
      axios.post(url, { value: this.currentAdvice })
        .then(response => {})
        .catch(e => {
          console.log(e);
        });
    },
    async getGoodAdvice() {
      this.awesome = true
      var url = "http://lucamilion.com:3000/goodadvice";
      try {
        let response = await axios.get(url);
        this.goodAdvice = response.data;
        return true;
      }
      catch (error) {
        console.log(error);
      }
    },
  },
});
