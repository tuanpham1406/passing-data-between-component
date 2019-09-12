<template>
    <div id="noName" class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome Developer! I'm {{name}} and {{age}} years old</p>
        <button @click="changeName">Change My Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :customName="name"
                                 @nameWasReset="name = $event"
                                 :resetNameFn="resetName"
                                 :userAge="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageWasEdit="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from "@/components/UserDetail";
    import UserEdit from "@/components/UserEdit";

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data: function () {
            return {
                name: 'Xtel Company',
                age: 18,
            }
        },
        methods: {
            changeName() {
                this.name = 'Anh Tuan';
            },
            resetName() {
                this.name = 'Tieu Nai Ha'
            }
        }
    }
</script>

<style>
    #noName {
        background-color: lightblue;
    }
</style>
