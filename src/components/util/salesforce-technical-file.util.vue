<template
    lang="html"
>
    <UrlUtil
        :text="value"
        :value="url"
    />
</template>

<script
    lang="js"
>
import {UrlUtil}          from '.';
import {technicalFileUrl} from './salesforce';
import {default as Vue}   from 'vue';

export default Vue.extend(
    {
        components: {
            UrlUtil,
        },
        computed  : {
            url() {
                return technicalFileUrl(this.value);
            }
        },
        props     : {
            value: {
                required: true,
                type    : String,
            },
        },
    },
);
</script>
