<template
    lang="html"
>
    <a
        :href="value"
        rel="nofollow noopener noreferrer"
        target="_blank"
    >
        {{ display }}
    </a>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';

export default Vue.extend(
    {
        computed: {
            display() {
                return this.text ?? this.value;
            },
        },
        props   : {
            text : {
                default: null,
                type   : String,
            },
            value: {
                required: true,
                type    : String,
            },
        },
    },
);
</script>
