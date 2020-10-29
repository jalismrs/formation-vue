<template
    lang="html"
>
    <header
        id="CSS-header"
        class="mb-5"
    >
        <nav
            class="navbar sticky-top navbar-dark bg-dark fixed-top"
        >
            <TheBrandComponent />
        </nav>
    </header>
</template>

<script
    lang="js"
>
import {default as Vue}    from 'vue';
import {TheBrandComponent} from './the-header';

export default Vue.extend(
    {
        components: {
            TheBrandComponent,
        },
    },
);
</script>
