<template>
    <h1>Home Page</h1>
</template>

<script>
export default {
    // when using dynamic components to load a component, the other components will be unmounted
    unmounted(){
        console.log("Home component unmounted");
    },

    // called when the component is active
    activated(){
        console.log("Home component activated");
    },
    // called when the component is inactive
    deactivated(){
        console.log("Home component deactivated");
    },
};
</script>