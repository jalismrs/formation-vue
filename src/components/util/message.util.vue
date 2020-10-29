<template
    lang="html"
>
    <b-alert
        :show="true"
        :variant="variant"
        v-html="message.text"
    />
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';

export default Vue.extend(
    {
        computed: {
            variant() {
                let variant;

                switch (this.message.level) {
                    case 'success':
                        variant = 'success';
                        break;
                    case 'warning':
                        variant = 'warning';
                        break;
                    case 'error':
                        variant = 'danger';
                        break;
                    default:
                        throw new Error(
                            `Unhandled level ${this.message.level}`,
                        );
                }

                return variant;
            },
        },
        props   : {
            message: {
                required: true,
                type    : Object,
            },
        },
    },
);
</script>
