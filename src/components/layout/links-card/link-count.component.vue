<template
    lang="html"
>
    <a
        href="#"
        target="_self"
    >
        :disabled="element.count === 0"
    >
        {{ element.text }}
        <span>
            {{ element.count }}
        </span>
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
