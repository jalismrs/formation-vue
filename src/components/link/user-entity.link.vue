<template
    lang="html"
>
    <a
        href="#"
        target="_self"
    >
        <template
            v-if="entity.active"
        >
            {{ entity.displayText }}
        </template>
        <s
            v-else
        >
            {{ entity.displayText }}
        </s>
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

