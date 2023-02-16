<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Kulineran</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex-xl" id="navbarNavAltMarkup">
                <div class="d-flex me-auto">
                    <RouterLink class="nav-link xl-ps-4 pe-2" to="/">Home</RouterLink>
                    <RouterLink class="nav-link" to="/foods">Foods</RouterLink>
                </div>
                <div>
                    <RouterLink class="nav-link" to="/keranjang">Keranjang
                        <font-awesome-icon icon="bag-shopping"></font-awesome-icon>
                        <span class="badge rounded-pill bg-success ms-2">0</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    name: "NavbarView",
    components: {
        FontAwesomeIcon,
    }
}
</script>

<style>

</style>