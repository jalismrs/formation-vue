<template
    lang="html"
>
    <header>
        <nav>
            <TheBrandComponent />
        </nav>
    </header>
</template>

<script
    lang="js"
>
import {default as Vue}    from 'vue';
import {TheBrandComponent} from 'main/the-header';

export default Vue.extend(
    {
        components: {
            TheBrandComponent,
        },
        name: 'TheHeaderComponent',
    },
);
</script>
