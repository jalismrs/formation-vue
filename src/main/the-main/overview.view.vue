<template
    lang="html"
>
    <main>
        <TheHeaderComponent
            :breadcrumbs="breadcrumbs"
            :entity="entity"
        />
        <TheMainComponent
            :access="access"
            :api-seo="apiSeo"
            :entity="entity"
            :traffic="traffic"
        />
    </main>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';
import {
    TheHeaderComponent,
    TheMainComponent,
}                       from './overview';

export default Vue.extend(
    {
        components: {
            TheMainComponent,
            TheHeaderComponent,
        },
        data() {
            return {
                access     : undefined,
                apiSeo     : undefined,
                breadcrumbs: undefined,
                entity     : undefined,
                traffic    : undefined,
            };
        },
    },
);
</script>

