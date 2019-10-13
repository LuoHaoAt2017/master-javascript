<template>
    <div class="root">
        <header>
            <p>Master JavaScript</p>
        </header>
        <section>
            <aside>
                <ul>
                    <li v-for="(chapter, index) in chapters" :key="index">
                        <router-link :to="chapter.path">{{chapter.name}}</router-link>
                    </li>
                </ul>
            </aside>
            <main>
                <router-view></router-view>
            </main>
        </section>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                chapters: [
                    {
                        path: "native-methods",
                        name: "Native Methods"
                    },
                    {
                        path: "/window",
                        name: "Window"
                    },
                    {
                        path: "/location",
                        name: "Location"
                    },
                    {
                        path: "/navigator",
                        name: "Navigator"
                    },
                    {
                        path: "/screen",
                        name: "Screen"
                    },
                    {
                        path: "/history",
                        name: "History"
                    }
                ]
            }
        },
        created() {
        },
        mounted() {
        },
        components: {

        }
    }
</script>

<style scoped>
    div.root {
        width: auto;
        height: auto;
        margin: auto;
        padding: 10px;
    }
    header {
        width: 1200px;
        height: 70px;
        background: aliceblue;
        margin: auto;
        position: relative;
    }
    section {
        width: 1200px;
        margin: auto;
    }
    aside {
        width: 250px;
        background: whitesmoke;
        min-height: 550px;
        float: left;
    }
    main {
        width: 920px;
        min-height: 550px;
        margin: 20px 20px 20px 280px;
        background: antiquewhite;
        position: relative;
    }
    aside, main {
        border-radius: 5px;
    }
    footer {
        width: 1200px;
        height: 70px;
        background: aliceblue;
        margin: auto;
    }
    header > p {
        width: 300px;
        height: 30px;
        position: absolute;
        left: 600px;
        top: 35px;
        margin-left: -150px;
        margin-top: -15px;
        text-align: center;
        font-size: 20px;
    }
</style>

<style>
    div.container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        /*border: 1px solid black;*/
    }
</style>
