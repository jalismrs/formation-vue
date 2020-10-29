<template
    lang="html"
>
    <time
        :datetime="value"
    >
        {{ text }}
    </time>
</template>

<script
    lang="js"
>
import {default as Moment} from 'moment';
import {default as Vue}    from 'vue';

export default Vue.extend(
    {
        computed: {
            text() {
                return Moment(this.value)
                    .format(this.format);
            },
        },
        props   : {
            format: {
                default: 'Y-MM-DD HH:mm:ss',
                type   : String,
            },
            value : {
                required: true,
                type    : String,
            },
        },
    },
);
</script>
