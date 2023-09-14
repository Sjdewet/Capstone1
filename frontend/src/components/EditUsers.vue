<template>
    <div>
        <div class="edit-Div">
            <h1 class="h1">Edit</h1>
            <a href="/admin" class="head">Back</a>
            <form @submit.prevent="EditProduct" class="edit-form">
                <input type="text" v-model="editP.prodName" placeholder="name" name="" id="">
                <input type="number" v-model="editP.quantity" placeholder="quantity" name="" id="">
                <input type="number" v-model="editP.amount" placeholder="amount" name="" id="">
                <input type="text" v-model="editP.Category" placeholder="category" name="" id="">
                <input type="text" v-model="editP.prodUrl" placeholder="image" name="" id="">
                <button type="submit" class="btn">SAVE</button>
            </form>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            editP: {
                prodID: this.id,
                prodName: "",
                quantity: "",
                amount: "",
                Category: "",
                prodUrl: ""
            },
        };
    },
    props: ["id"],
    methods: {
        EditProduct() {
            this.$store.dispatch("SaveEdit", this.editP)
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