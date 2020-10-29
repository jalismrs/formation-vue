<template
    lang="html"
>
    <div>
        <header>
            <b>
                Interventions contrat
            </b>
        </header>
        <div>
            <template
                v-if="contract.interventions.length === 0"
            >
                Aucune intervention contrat
            </template>
            <div
                v-else
            >
                <dl>
                    <InterventionComponent
                        v-for="intervention in contract.interventions"
                        :key="intervention.id"
                        :intervention="intervention"
                    />
                </dl>
            </div>
        </div>
    </div>
</template>

<script
    lang="js"
>
import {default as Vue}        from 'vue';
import {InterventionComponent} from 'main/the-main/overview/the-main/interventions';

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

