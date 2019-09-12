<template>
    <div class="component">
        <h3>Information User Details</h3>
        <p>List Details</p>
        <p>My name: {{customName}}</p>
        <p>My age: {{userAge}}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetNameFn()">Reset case: Call Back</button>
    </div>
</template>

<script>
    import {eventBus} from "@/main";
    //props dùng để truyền dữ liệu từ component cha sang các component con,
    //và các con truyền thông báo đến component cha thông qua các sự kiện
    export default {
        props: {
            customName: {
                type: String,
                default: 'sao lai lo roi'
            },
            resetNameFn: Function,
            userAge: Number
        },
        methods: {
            resetName() {
                this.customName = 'Khuynh Thanh';
                this.$emit('nameWasReset', this.customName);
            }
        },
        created() {
            eventBus.$on('ageWasEdit', (age) => {
                this.userAge = age;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
