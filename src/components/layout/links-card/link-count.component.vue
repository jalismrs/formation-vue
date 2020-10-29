<template
    lang="html"
>
    <b-link
        :disabled="element.count === 0"
        :to="element.location"
        class="btn btn-primary"
    >
        {{ element.text }}
        <b-badge
            pill
            variant="light"
        >
            {{ element.count }}
        </b-badge>
    </b-link>
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
