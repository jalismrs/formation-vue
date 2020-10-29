<template
    lang="html"
>
    <div>
        <header>
            <b>
                API SEO
            </b>
        </header>
        <div>
            <ApiSeoComponent
                v-if="display"
                :api-seo="apiSeo"
            />
            <template
                v-else
            >
                Données indisponibles
            </template>
        </div>
    </div>
</template>

<script
    lang="js"
>
import {default as Vue}  from 'vue';
import {ApiSeoComponent} from './api-seo-holder';

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

