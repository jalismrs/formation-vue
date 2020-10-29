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
                Informations
            </b>
        </template>
        <b-card-body>
            <b-container
                :fluid="true"
            >
                <dl
                    class="row"
                >
                    <dt
                        class="col-xl-3 col-lg-4 col-md-5 col-sm-6"
                    >
                        ID Google Analytics
                    </dt>
                    <dd
                        class="col-xl-9 col-lg-8 col-md-7 col-sm-6"
                    >
                        {{ entity.externalId }}
                    </dd>

                    <dt
                        class="col-xl-3 col-lg-4 col-md-5 col-sm-6"
                    >
                        Créée le
                    </dt>
                    <dd
                        class="col-xl-9 col-lg-8 col-md-7 col-sm-6"
                    >
                        <DateTimeUtil
                            :format="format"
                            :value="entity.created"
                        />
                    </dd>

                    <template
                        v-if="areDatesEqual(entity.created, entity.updated)"
                    >
                        <dt
                            class="col-xl-3 col-lg-4 col-md-5 col-sm-6"
                        >
                            Mise à jour le
                        </dt>
                        <dd
                            class="col-xl-9 col-lg-8 col-md-7 col-sm-6"
                        >
                            <DateTimeUtil
                                :format="format"
                                :value="entity.updated"
                            />
                        </dd>
                    </template>

                    <dt
                        class="col-xl-3 col-lg-4 col-md-5 col-sm-6"
                    >
                        Contrat Salesforce
                    </dt>
                    <dd
                        v-if="entity.contract === null"
                        class="col-xl-9 col-lg-8 col-md-7 col-sm-6"
                    >
                        Aucun contrat associé
                    </dd>
                    <dd
                        v-else
                        class="col-xl-9 col-lg-8 col-md-7 col-sm-6"
                    >
                        <SalesforceContractUtil
                            :value="entity.contract.externalId"
                        />
                    </dd>

                    <template
                        v-if="entity.contract !== null && entity.contract.user"
                    >
                        <dt
                            class="col-xl-3 col-lg-4 col-md-5 col-sm-6"
                        >
                            Utilisateur contrat Salesforce
                        </dt>
                        <dd
                            class="col-xl-9 col-lg-8 col-md-7 col-sm-6"
                        >
                            <UserEntityLink
                                :entity="entity.contract.user"
                            />
                        </dd>
                    </template>

                    <dt
                        class="col-xl-3 col-lg-4 col-md-5 col-sm-6"
                    >
                        Site web
                    </dt>
                    <dd
                        class="col-xl-9 col-lg-8 col-md-7 col-sm-6"
                    >
                        <UrlUtil
                            :value="entity.url"
                        />
                    </dd>

                    <template
                        v-if="entity.missingPermissions.length > 0"
                    >
                        <dt
                            class="col-xl-3 col-lg-4 col-md-5 col-sm-6"
                        >
                            Permissions manquantes
                        </dt>
                        <dd
                            class="col-xl-9 col-lg-8 col-md-7 col-sm-6"
                        >
                            <ul
                                class="list-unstyled"
                            >
                                <li
                                    v-for="(missingPermission,index) in entity.missingPermissions"
                                    :key="index"
                                >
                                    {{ missingPermission }}
                                </li>
                            </ul>
                        </dd>
                    </template>
                </dl>
            </b-container>
        </b-card-body>
    </b-card>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';
import {UserEntityLink} from '../../../../components/link';
import {
    DateTimeUtil,
    SalesforceContractUtil,
    UrlUtil,
}                       from '../../../../components/util';
import * as dates       from '../../../../util/helpers/dates';

export default Vue.extend(
    {
        components: {
            DateTimeUtil,
            SalesforceContractUtil,
            UrlUtil,
            UserEntityLink,
        },
        data() {
            return {
                format: 'dddd DD MMMM Y',
            };
        },
        methods   : {
            areDatesEqual(
                date1,
                date2,
            ) {
                return dates.areDatesEqual(
                    date1,
                    date2,
                );
            }
        },
        props     : {
            access: {
                required: true,
                type    : Object,
            },
            entity: {
                required: true,
                type    : Object,
            },
        },
    },
);
</script>

