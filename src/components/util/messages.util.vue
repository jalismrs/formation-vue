<template
    lang="html"
>
    <div
        v-if="messages.length > 0"
        class="mb-5"
    >
        <MessageUtil
            v-for="(message, index) in messages"
            :key="index"
            :message="message"
        />
    </div>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';
import {MessageUtil}    from '.';

export default Vue.extend(
    {
        components: {
            MessageUtil,
        },
        props     : {
            messages: {
                required: true,
                type    : Array,
            },
        },
    },
);
</script>
