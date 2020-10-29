<template
    lang="html"
>
    <div>
        <dl>
            <template
                v-if="apiSeo.stats.nombreContacts"
            >
                <dt>
                    Contacts
                </dt>
                <dd>
                    <span>
                        {{ apiSeo.stats.nombreContacts }}
                    </span>
                </dd>
            </template>
            <template
                v-if="apiSeo.stats.nombreExpressions"
            >
                <dt>
                    Jalis Express
                </dt>
                <dd>
                    <span>
                        {{ apiSeo.stats.nombreExpressions }}{{
                            hasNombreExpressionsMax ? ` sur
                        ${apiSeo.config.maxExpression}` : ''
                        }}
                    </span>
                </dd>
            </template>
            <template
                v-if="apiSeo.stats.nombreAnnonces"
            >
                <dt>
                    Annonces
                </dt>
                <dd>
                    <span>
                        {{ apiSeo.stats.nombreAnnonces - 2 }}{{
                            hasNombreAnnoncesMax ? ` sur
                        ${apiSeo.config.maxAnnonce}` : ''
                        }}
                    </span>
                </dd>
            </template>
            <template
                v-if="apiSeo.stats.nombreLiensUtiles"
            >
                <dt>
                    Liens utile
                </dt>
                <dd>
                    <span>
                        {{ apiSeo.stats.nombreLiensUtiles }}
                    </span>
                </dd>
            </template>
            <template
                v-if="apiSeo.stats.nombreArchives"
            >
                <dt>
                    Archives
                </dt>
                <dd>
                    <span>
                        {{ apiSeo.stats.nombreArchives }}
                    </span>
                </dd>
            </template>
            <template
                v-if="apiSeo.stats.nombreJoursSansMaj"
            >
                <dt>
                    Dernière
                    <abbr
                        title="mise à jour"
                    >
                        MAJ
                    </abbr>
                </dt>
                <dd>
                    <span>
                        Il y a {{ apiSeo.stats.nombreJoursSansMaj }} {{ words.jours }}
                    </span>
                </dd>
            </template>
            <template
                v-if="apiSeo.stats.nombreCaracMoy"
            >
                <dt>
                    Moyenne des caractères par annonce
                </dt>
                <dd>
                    <span>
                        {{ apiSeo.stats.nombreCaracMoy }}
                    </span>
                </dd>
            </template>
        </dl>
    </div>
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

