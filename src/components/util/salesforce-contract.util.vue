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
import {default as Vue} from 'vue';
import {UrlUtil}        from '.';
import {contractUrl}    from './salesforce/urls';

export default Vue.extend(
    {
        components: {
            UrlUtil,
        },
        computed  : {
            url() {
                return contractUrl(this.value);
            },
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
