<template
    lang="html"
>
    <b-link>
        {{ entity.displayText }}
    </b-link>
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
