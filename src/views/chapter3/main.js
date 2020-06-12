require.config({
    paths: {
        "vue": "https://cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min",
        "jquery": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery"
    }
});

require(["vue", "jquery"], function(Vue, JQuery) {
    console.log('load successfully');
    console.log('vue', Vue);
    console.log('jquery', JQuery);
});