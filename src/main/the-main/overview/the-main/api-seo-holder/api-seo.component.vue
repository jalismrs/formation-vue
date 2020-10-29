<template
    lang="html"
>
    <b-container
        :fluid="true"
    >
        <dl
            class="row"
        >
            <template
                v-if="apiSeo.stats.nombreContacts"
            >
                <dt
                    class="col-sm-8"
                >
                    Contacts
                </dt>
                <dd
                    class="col-sm-4"
                >
                    <b-badge
                        variant="light"
                    >
                        {{ apiSeo.stats.nombreContacts }}
                    </b-badge>
                </dd>
            </template>
            <template
                v-if="apiSeo.stats.nombreExpressions"
            >
                <dt
                    class="col-sm-8"
                >
                    Jalis Express
                </dt>
                <dd
                    class="col-sm-4"
                >
                    <b-badge
                        :variant="hasNombreExpressions ? 'warning' : 'success'"
                    >
                        {{ apiSeo.stats.nombreExpressions }}{{
                            hasNombreExpressionsMax ? ` sur
                        ${apiSeo.config.maxExpression}` : ''
                        }}
                    </b-badge>
                </dd>
            </template>
            <template
                v-if="apiSeo.stats.nombreAnnonces"
            >
                <dt
                    class="col-sm-8"
                >
                    Annonces
                </dt>
                <dd
                    class="col-sm-4"
                >
                    <b-badge
                        :variant="hasNombreAnnonces ? 'danger' : 'success'"
                    >
                        {{ apiSeo.stats.nombreAnnonces - 2 }}{{
                            hasNombreAnnoncesMax ? ` sur
                        ${apiSeo.config.maxAnnonce}` : ''
                        }}
                    </b-badge>
                </dd>
            </template>
            <template
                v-if="apiSeo.stats.nombreLiensUtiles"
            >
                <dt
                    class="col-sm-8"
                >
                    Liens utile
                </dt>
                <dd
                    class="col-sm-4"
                >
                    <b-badge
                        variant="light"
                    >
                        {{ apiSeo.stats.nombreLiensUtiles }}
                    </b-badge>
                </dd>
            </template>
            <template
                v-if="apiSeo.stats.nombreArchives"
            >
                <dt
                    class="col-sm-8"
                >
                    Archives
                </dt>
                <dd
                    class="col-sm-4"
                >
                    <b-badge
                        variant="light"
                    >
                        {{ apiSeo.stats.nombreArchives }}
                    </b-badge>
                </dd>
            </template>
            <template
                v-if="apiSeo.stats.nombreJoursSansMaj"
            >
                <dt
                    class="col-sm-8"
                >
                    Dernière
                    <abbr
                        title="mise à jour"
                    >
                        MAJ
                    </abbr>
                </dt>
                <dd
                    class="col-sm-4"
                >
                    <b-badge
                        :variant="hasNombreJoursSansMaj ? 'warning' : 'light'"
                    >
                        Il y a {{ apiSeo.stats.nombreJoursSansMaj }} {{ words.jours }}
                    </b-badge>
                </dd>
            </template>
            <template
                v-if="apiSeo.stats.nombreCaracMoy"
            >
                <dt
                    class="col-sm-8"
                >
                    Moyenne des caractères par annonce
                </dt>
                <dd
                    class="col-sm-4"
                >
                    <b-badge
                        :variant="hasNombreCaracMoy ? 'success' : 'light'"
                    >
                        {{ apiSeo.stats.nombreCaracMoy }}
                    </b-badge>
                </dd>
            </template>
        </dl>
    </b-container>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';

export default Vue.extend(
    {
        computed: {
            hasNombreAnnonces() {
                return this.apiSeo.stats.nombreAnnonces !== undefined
                    &&
                    this.apiSeo.config.maxAnnonce !== undefined
                    &&
                    this.apiSeo.stats.nombreAnnonces - 2 >= this.apiSeo.config.maxAnnonce;
            },
            hasNombreAnnoncesMax() {
                return this.apiSeo.config.maxAnnonce !== undefined;
            },
            hasNombreCaracMoy() {
                return this.apiSeo.stats.nombreCaracMoy !== undefined
                    &&
                    this.apiSeo.stats.nombreCaracMoy > 300;
            },
            hasNombreExpressions() {
                return this.apiSeo.stats.nombreExpressions !== undefined
                    &&
                    this.apiSeo.config.maxExpression !== undefined
                    &&
                    this.apiSeo.stats.nombreExpressions >= this.apiSeo.config.maxExpression;
            },
            hasNombreExpressionsMax() {
                return this.apiSeo.config.maxExpression !== undefined;
            },
            hasNombreJoursSansMaj() {
                return this.apiSeo.stats.nombreJoursSansMaj !== undefined
                    &&
                    this.apiSeo.stats.nombreJoursSansMaj > 30;
            },
            words() {
                return {
                    jours: this.apiSeo.stats.nombreJoursSansMaj !== undefined
                    &&
                    this.apiSeo.stats.nombreJoursSansMaj <= 1
                        ? 'jour'
                        : 'jours',
                };
            },
        },
        props   : {
            apiSeo: {
                required: true,
                type    : Object,
            },
        },
    },
);
</script>

