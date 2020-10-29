<template
    lang="html"
>
    <span>
        {{ display.text }}
    </span>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';

export default Vue.extend(
    {
        computed: {
            display() {
                return this.value
                    ? {
                        text   : 'Oui',
                        variant: 'success',
                    }
                    : {
                        text   : 'Non',
                        variant: 'danger',
                    };
            },
        },
        props   : {
            value: {
                required: true,
                type    : Boolean,
            },
        },
    },
);
</script>
