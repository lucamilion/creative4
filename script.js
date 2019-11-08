/*global Vue*/
/*global fetch*/
var app = new Vue({
  el: '#app',
  data: {
    cities: [],
    prefix: '',
    searchWord: '',
    definitions: [],
  },
  methods: {
    fetchREST() {
      console.log("In Fetch " + this.prefix);
      var url = "getcity?q=" + this.prefix;
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((citylist) => {
          console.log("CityList");
          console.log(citylist);
          this.cities = [];
          for (let i = 0; i < citylist.length; i++) {
            console.log(citylist[i].city);
            this.cities.push({ name: citylist[i].city });
          };
          console.log("Got Citylist");
        });
    },
    fetchDef() {
      console.log("In Fetch " + this.searchWord);
      var url = "http://lucamilion.com:3000/owlRoute?q=" + this.searchWord;
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((define) => {
          console.log(define);
          this.definitions = [];
          for (let i = 0; i < define.length; i++) {
            console.log(define[i].defenition);
            this.definitions.push({ def: define[i].defenition, type: define[i].type, example: define[i].example })
          }
        });
    },
  },
});
//pid is 13992
//to launch: nohup node ./bin/www >& output &
