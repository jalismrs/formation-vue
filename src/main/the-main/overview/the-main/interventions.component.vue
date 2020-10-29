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
                Interventions contrat
            </b>
        </template>
        <b-card-body>
            <template
                v-if="contract.interventions.length === 0"
            >
                Aucune intervention contrat
            </template>
            <b-container
                v-else
                :fluid="true"
            >
                <dl
                    class="row"
                >
                    <InterventionComponent
                        v-for="intervention in contract.interventions"
                        :key="intervention.id"
                        :intervention="intervention"
                    />
                </dl>
            </b-container>
        </b-card-body>
    </b-card>
</template>

<script
    lang="js"
>
import {default as Vue}        from 'vue';
import {InterventionComponent} from './interventions';

export default Vue.extend(
    {
        components: {
            InterventionComponent,
        },
        props     : {
            contract: {
                required: true,
                type    : Object,
            },
        },
    },
);
</script>

