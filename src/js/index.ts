new Vue({
    el: "#app",
    data: {
        word: "",
        words: []
        //output: ""
    },
    methods: {
        save: function () {
            this.words.push(this.word)
        },
        // show: function () { },
        // not necessary. Using computed property
        clear: function () {
            this.words = []
        }
    },
    computed: { // computed property 
        // https://vuejs.org/v2/guide/computed.html
        output: function () {
            if (this.words.length == 0) {
                return "empty";
            }
            return this.words.toString();
        }
    }
})