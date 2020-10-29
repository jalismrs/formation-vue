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
import {opportunityUrl} from 'components/util/salesforce';

export default Vue.extend(
    {
        components: {
            UrlUtil,
        },
        computed  : {
            url() {
                return opportunityUrl(this.value);
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
