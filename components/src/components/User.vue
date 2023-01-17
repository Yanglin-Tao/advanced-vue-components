<template>
    <!-- update of data in child component is not reflected -->
    <!-- <button type="button" @click="age++">Update Age</button> -->

    <!-- emitting events allow to update data in child component-->
    <button type="button" @click="onClickAge">Update Age (emitting events)</button>

    <!-- use callback functions -->
    <button type="button" @click="ageChangeFn(3)">Update Age (callback function)</button>

    <p>The user is {{ age }} years old</p>

    <!-- display the computed property -->
    <p>Age doubled: {{ ageDoubled }}</p>
</template>

<script>
export default {
    name: "User",
    // elements in array of properties should match the attribute name
    // props: ["age"],
    // validate props by limiting data types
    props:  {
        age: {
            // type key checks data type 
            type: Number,
            // can check multiple data types
            // type: [Number, String]

            // required key means the variable must have a value when set to true
            // required: true

            // default key sets the default value of the variable
            // default: 20

            // function to validate data
            validator(value){
                // no access to the function
                // this.onClickAge()
                return value < 130
            }
        },
        ageChangeFn: Function
    },
    // recommends to record what the component does
    emits: ['age-change'],
    computed: {
        ageDoubled(){
            return this.age * 2

        }
    },
    methods: {
       onClickAge(){
        // increment data by a constant
        this.$emit('age-change', 3)
       } 
    }
}
</script>
