/*global Vue*/
/*global axios*/
/*global fetch*/
var app = new Vue({
  el: '#app',
  data: {
    currentAdvice: '',
    goodAdvice: [],
    awesome: false,
    saved: false
  },
  methods: {
    getAdvice() {
      this.saved = false;
      this.awesome = false;
      var url = "http://lucamilion.com:3000/advice";
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((advice) => {
          console.log(advice);
          this.currentAdvice = advice.slip.advice;
        });
    },
    addAdviceToBase() {
      this.saved = true;
      console.log("adding");
      var url = "http://lucamilion.com:3000/goodadvice";
      axios.post(url, { value: this.currentAdvice })
        .then(response => {})
        .catch(e => {
          console.log(e);
        });
    },
    async getGoodAdvice() {
      this.awesome = true;
      var url = "http://lucamilion.com:3000/goodadvice";
      try {
        let response = await axios.get(url);
        let unfiltered = response.data;
        console.log(unfiltered);
        let filtered = [];
        for (let i = 0; i < unfiltered.length; i++) {
          if (filtered.includes(unfiltered[i].value)) {
            //do nothing
          }
          else {
            filtered.push(unfiltered[i].value);
          }
        }
        this.goodAdvice = filtered;
        return true;
      }
      catch (error) {
        console.log(error);
      }
    },
  },
});
//29469
