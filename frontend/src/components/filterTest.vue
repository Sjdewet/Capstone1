<template>
    <div>
        <button class="sort-btn" @click="sortByName">Sort (Name)</button>
        <button class="sort-btn" @click="sortByPrice">Sort (Price)</button>
    </div>
</template>

<script>
    export default {
        computed: {
            sortByName() {
                console.log("button pressed");
                this.$store.dispatch("FilterName")
            },
            sortByPrice() {
                console.log("was pressed");
                this.$store.dispatch("FilterPrice")
            }
        }

        
    }
</script>

<style scoped>
.sort-btn{
background-color: #C6A443;
width: 9rem;
height: 2rem;
margin-top: 2rem;
margin-inline: 1rem;
}
</style>