var vm = new Vue({
            el: '#greeting1',
            data: {
               name:'',
               styleobj: {
                  width: "30%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  boxSizing: "border-box"
               }
            },
            methods : {
               showinputvalue : function(event) {
                  this.name=event.target.value;
               }
            }
         });


Vue.component("class-test1", {
    template: "<h2>This is 1st global</h2>",
    });

    //Global
    var globalComponent = new Vue({
    el: "#globalComponent",
    data: {
    message: "2nd Global",
    },
    });

    //Local
    var localComponent = new Vue({
    el: "#localComponent",
    components: {
    "class-test2": {
    template: "<h2>This is a local.</h2>",
    },
    },
    });

var greeting2 = new Vue({
    el: "#greeting2",
    data: {
    greeting: "Hello, how are you",
    },
    components: {
    "greeting-container": {
    props: ["greeting"],
    data: function () {
    return { name: "BRO" };
    },
    template: "<div> {{ greeting }}, {{ name }}</div>",
    },
    },
    });

const UserName = {
  props: {
    firstName: String,
    lastName: String
  },
  template: `
    <input 
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">

    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
  `
};