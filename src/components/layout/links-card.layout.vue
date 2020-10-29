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
                Liens
            </b>
        </template>
        <b-card-body>
            <div
                v-for="(element) in links"
                :key="element.name"
                class="my-1"
            >
                <LinkCountComponent
                    v-if="element.hasOwnProperty('count')"
                    :element="element"
                />
                <LinkComponent
                    v-else
                    :element="element"
                />
            </div>
        </b-card-body>
    </b-card>
</template>

<script
    lang="js"
>
import {
    LinkComponent,
    LinkCountComponent,
}                       from 'App/components/layout/links-card';
import {default as Vue} from 'vue';

export default Vue.extend(
    {
        components: {
            LinkComponent,
            LinkCountComponent,
        },
        mounted() {
            if (Object.keys(this.links).length === 0) {
                throw new Error(
                    'No links provided'
                );
            }
        },
        props     : {
            links: {
                required: true,
                type    : Array,
            },
        },
    },
);
</script>
