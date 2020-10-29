<template
    lang="html"
>
    <div>
        <header>
            <b>
                Liens
            </b>
        </header>
        <div>
            <div
                v-for="(element) in links"
                :key="element.name"
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
        </div>
    </div>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';
import {
    LinkComponent,
    LinkCountComponent,
}                       from './links-card';

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
