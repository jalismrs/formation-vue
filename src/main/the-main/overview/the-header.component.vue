<template
    lang="html"
>
    <header>
        <h1>
            Détails de la vue: '{{ entity.displayText }}'
        </h1>
    </header>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';

export default Vue.extend(
    {
        props: {
            entity: {
                required: true,
                type    : Object,
            },
        },
    },
);
</script>

