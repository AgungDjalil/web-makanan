<template>
    <div class="home">
        <Navbar />
        <div class="container">
            <Hero />
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/NavbarComp.vue";
import Hero from "@/components/HeroComp.vue";

export default {
    name: "HomeView",
    components: {
        Navbar,
        Hero,
    }
}
</script>