<template
    lang="html"
>
    <a
        target="_self"
        :href="`mailto:${value}`"
    >
        {{ value }}
    </a>
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
