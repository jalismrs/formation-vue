<template
    lang="html"
>
    <a
        href="#"
       target="_self"
    >
        {{ entity.displayText }}
    </a>
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
