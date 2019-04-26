<template>
    <div>
        <h2>{{contact.firstname}}</h2>
        <p>{{contact.mobile.areacode}}</p>
    </div>
</template>
<script>
export default {
    name: "Contact",
    props:{
        contact: Object,
    }
}
</script>

