<template>
    <div id="app">
        <navbar></navbar>
        <div id="content-wrap">
            <div id="userfield">
                <h3>Our Users:</h3>
                <table id="userlist">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Registration date</td>
                        </tr>
                    </thead>
                    <!-- eslint-disable-next-line -->
                    <tr v-for="user in users">
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.creationDate}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <BottomNav />
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar";
    import BottomNav from "@/components/BottomNav";

    export default {
        name: 'app',
        components: {
            BottomNav,
            Navbar
        },
        data: function () {
            return {
                users: {
                    0: {
                        id: 0,
                        name: 'Lorem ipsum',
                        email: 'dolor@sit.amet',
                        creationDate: '30.05.2019'
                    },
                    1: {
                        id: 1,
                        name: 'Consectetur adipiscing',
                        email: 'eiusmod@tempor.incididunt',
                        creationDate: '31.05.2019'
                    }

                }

            }
        }
    }
</script>

<style>
    html, body {
        font-family: Arial, Helvetica, sans-serif;
        height: 100%;
        margin: 0;
    }
    #content-wrap {
        display: flex;
        min-height: 82vh;
        flex-direction: column;
        width: 100%;
        height: auto;
        align-items: center;
        justify-content: center;
    }
    #userfield {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
        height: auto;
        padding: 20px 20px 50px 20px;
        border-radius: 20px;
        background: #F7F7F7;
    }
    #userlist {
        border-collapse: collapse;
        border: 1px solid #808080;
    }

    thead {
        white-space: nowrap;
        text-align: left;
        font-weight: 700;
    }
    tr td {
        padding: 1rem;
        border: 1px solid #808080;
    }
</style>