<template
    lang="html"
>
    <b-link
        :href="`mailto:${value}`"
    >
        {{ value }}
    </b-link>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';

export default Vue.extend(
    {
        props: {
            value: {
                required: true,
                type    : String,
            },
        },
    },
);
</script>
