<template
    lang="html"
>
    <b-link>
        <template
            v-if="entity.active"
        >
            {{ entity.displayText }}
        </template>
        <s
            v-else
            class="inactive"
        >
            {{ entity.displayText }}
        </s>
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

