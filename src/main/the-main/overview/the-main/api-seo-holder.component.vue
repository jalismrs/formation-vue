<template
    lang="html"
>
    <b-card
        footer-tag="footer"
        header-tag="header"
        no-body
    >
        <template
            #header
        >
            <b>
                API SEO
            </b>
        </template>
        <b-card-body>
            <ApiSeoComponent
                v-if="display"
                :api-seo="apiSeo"
            />
            <template
                v-else
            >
                Données indisponibles
            </template>
        </b-card-body>
    </b-card>
</template>

<script
    lang="js"
>
import {ApiSeoComponent} from 'App/views/app/view/overview/the-main/api-seo-holder';
import {default as Vue}  from 'vue';

export default Vue.extend(
    {
        components: {
            ApiSeoComponent,
        },
        computed  : {
            display() {
                return this.apiSeo !== null
                    &&
                    (
                        Object.keys(this.apiSeo.config).length > 1
                        ||
                        Object.keys(this.apiSeo.stats).length > 1
                    );
            },
        },
        props     : {
            apiSeo: {
                default: null,
                type   : Object,
            },
        },
    },
);
</script>

