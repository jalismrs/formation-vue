<template
    lang="html"
>
    <b-link
        :to="element.location"
        class="btn btn-primary"
    >
        {{ element.text }}
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
