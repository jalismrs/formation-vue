<template
    lang="html"
>
    <b-container
        :fluid="true"
    >
        <b-row>
            <b-col
                class="CSS-card-block-half-width"
            >
                <InfosComponent
                    :access="access"
                    :entity="entity"
                />
            </b-col>
            <b-col
                class="CSS-card-block-half-width"
            >
                <ApiSeoHolderComponent
                    :api-seo="apiSeo"
                />
            </b-col>
        </b-row>
        <b-row>
            <b-col
                class="CSS-card-block-half-width"
            >
                <TrafficComponent
                    :items="traffic.total"
                >
                    <template
                        #title
                    >
                        Trafic total
                    </template>
                </TrafficComponent>
                <TrafficComponent
                    :items="traffic.last"
                >
                    <template
                        #title
                    >
                        Trafic du mois de {{ date }}
                    </template>
                </TrafficComponent>
            </b-col>
            <b-col
                v-if="entity.contract !== null"
                class="CSS-card-block-half-width"
            >
                <InterventionsComponent
                    :contract="entity.contract"
                />
            </b-col>
        </b-row>
    </b-container>
</template>

<script
    lang="js"
>
import {default as Moment} from 'moment';
import {default as Vue}    from 'vue';
import {TrafficComponent}  from '../../../components/data';
import {
    ApiSeoHolderComponent,
    InfosComponent,
    InterventionsComponent,
}                          from './the-main';

export default Vue.extend(
    {
        components: {
            ApiSeoHolderComponent,
            InfosComponent,
            InterventionsComponent,
            TrafficComponent,
        },
        data() {
            return {
                date: Moment()
                    .add(
                        -1,
                        'month',
                    )
                    .format('MMMM Y'),
            };
        },
        props     : {
            access : {
                required: true,
                type    : Object,
            },
            apiSeo : {
                default: null,
                type   : Object,
            },
            entity : {
                required: true,
                type    : Object,
            },
            traffic: {
                required: true,
                type    : Object,
            },
        },
    },
)
;
</script>

