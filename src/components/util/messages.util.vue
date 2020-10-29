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
import {MessageUtil}    from 'App/components/util';
import {default as Vue} from 'vue';

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
