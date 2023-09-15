<template>
    <div>
        <div class="edit-Div">
            <h1 class="h1">Edit</h1>
            <a href="/admin" class="head">Back</a>
            <form @submit.prevent="EditUsers" class="edit-form">
                <input type="text" v-model="editU.firstName" placeholder="name" name="" id="">
                <input type="text" v-model="editU.lastName" placeholder="lastname" name="" id="">
                <input type="number" v-model="editU.userAge" placeholder="age" name="" id="">
                <input type="text" v-model="editU.gender" placeholder="gender" name="" id="">
                <input type="text" v-model="editU.userRole" placeholder="role" name="" id="">
                <input type="text" v-model="editU.emailAdd" placeholder="email" name="" id="">
                <input type="text" v-model="editU.userProfile" placeholder="profile" name="" id="">
                <button type="submit" class="btn">SAVE</button>
            </form>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            editU: {
                userID: this.id,
                firstName: "",
                lastName: "",
                userAge: "",
                gender: "",
                userRole: "",
                emailAdd: "",
                userProfile: ""
            },
        };
    },
    props: ["id"],
    methods: {
        EditUsers() {
            this.$store.dispatch("EditUsers", this.editU)
        }
    }

}
</script>

<style scoped>
.h1{
    color: #C6A443;
}

.head{
    color: #C6A443;
}

.btn{
     color: #C6A443;
}
</style>