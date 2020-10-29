<template
    lang="html"
>
    <a
        href="#"
        target="_self"
    >
        {{ element.text }}
    </a>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';

export default Vue.extend(
    {
        props: {
            element: {
                required: true,
                type    : Object,
            },
        },
    },
);
</script>
