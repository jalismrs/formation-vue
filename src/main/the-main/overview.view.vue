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
import {
    TheHeaderComponent,
    TheMainComponent,
}                       from 'main/the-main/overview';
import {default as Vue} from 'vue';

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

