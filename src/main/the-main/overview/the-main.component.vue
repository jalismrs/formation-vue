<template
    lang="html"
>
    <div>
        <div>
            <div>
                <InfosComponent
                    :access="access"
                    :entity="entity"
                />
            </div>
            <div>
                <ApiSeoHolderComponent
                    :api-seo="apiSeo"
                />
            </div>
        </div>
        <div>
            <div>
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
            </div>
            <div
                v-if="entity.contract !== null"
            >
                <InterventionsComponent
                    :contract="entity.contract"
                />
            </div>
        </div>
    </div>
</template>

<script
    lang="js"
>
import {default as moment} from 'moment';
import {default as Vue}   from 'vue';
import {TrafficComponent} from 'components/data';
import {
    ApiSeoHolderComponent,
    InfosComponent,
    InterventionsComponent,
}                         from './the-main';

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
                date: moment()
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

