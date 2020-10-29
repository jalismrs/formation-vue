<template
    lang="html"
>
    <div>
        <header>
            <b>
                Informations
            </b>
        </header>
        <div>
            <div>
                <dl>
                    <dt>
                        ID Google Analytics
                    </dt>
                    <dd>
                        {{ entity.externalId }}
                    </dd>

                    <dt>
                        Créée le
                    </dt>
                    <dd>
                        <DateTimeUtil
                            :format="format"
                            :value="entity.created"
                        />
                    </dd>

                    <template
                        v-if="areDatesEqual(entity.created, entity.updated)"
                    >
                        <dt>
                            Mise à jour le
                        </dt>
                        <dd>
                            <DateTimeUtil
                                :format="format"
                                :value="entity.updated"
                            />
                        </dd>
                    </template>

                    <dt>
                        Contrat Salesforce
                    </dt>
                    <dd
                        v-if="entity.contract === null"
                    >
                        Aucun contrat associé
                    </dd>
                    <dd
                        v-else
                    >
                        <SalesforceContractUtil
                            :value="entity.contract.externalId"
                        />
                    </dd>

                    <template
                        v-if="entity.contract !== null && entity.contract.user"
                    >
                        <dt>
                            Utilisateur contrat Salesforce
                        </dt>
                        <dd>
                            <UserEntityLink
                                :entity="entity.contract.user"
                            />
                        </dd>
                    </template>

                    <dt>
                        Site web
                    </dt>
                    <dd>
                        <UrlUtil
                            :value="entity.url"
                        />
                    </dd>

                    <template
                        v-if="entity.missingPermissions.length > 0"
                    >
                        <dt>
                            Permissions manquantes
                        </dt>
                        <dd>
                            <ul>
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
            </div>
        </div>
    </div>
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

