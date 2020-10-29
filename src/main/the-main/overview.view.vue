<template
    lang="html"
>
    <main>
        <TheHeaderComponent
            :entity="entity"
        />
        <TheMainComponent
            :api-seo="apiSeo"
            :entity="entity"
            :traffic="traffic"
        />
    </main>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';
import {
    TheHeaderComponent,
    TheMainComponent,
}                       from './overview';

export default Vue.extend(
    {
        components: {
            TheMainComponent,
            TheHeaderComponent,
        },
        data() {
            return {
                apiSeo : {
                    date  : "2020-10-29T10:47:47+00:00",
                    config: {
                        mentionsLegales           : "mentions-legales",
                        maxExpression             : "45",
                        maxAnnonce                : "210",
                        maxAnnonceZen             : "9",
                        maxAnnonceArchives        : "12",
                        maxAnnonceFooter          : "4",
                        maxAnnoncePrestations     : "12",
                        maxAnnoncePage            : "12",
                        maxSecteurFooter          : "4",
                        adresseTechnique          : "",
                        version                   : "3.16.3",
                        activite                  : "Aide à domicile pour les personnes handicapées Marseille",
                        url                       : "domiblue.fr",
                        description               : "Contactez Domiblue pour un accompagnement à domicile des personnes âgées, handicapées et maintiens temporaires. Nos infirmiers et assistants de soin interviennent autour de Marseille et Aubagne.",
                        motsCles                  : "",
                        prefixeUrl                : "activites",
                        texteAccueil              : "L&rsquo;entreprise Domiblue apporte un accompagnement et une assistance &agrave; domicile des personnes &acirc;g&eacute;es sur Marseille, Allauch, Aubagne et ses alentours. Le groupe est expert depuis plus de 10 ans dans le maintien &agrave; domicile et propose son soutien aux personnes en perte d&rsquo;autonomie ou bien d&eacute;pendantes d&rsquo;un dispositif de soin. L&rsquo;&eacute;tat de sant&eacute; de la personne est toujours pris en compte, de m&ecirc;me que sa personnalit&eacute;. Nous vous apportons des conseils et des r&eacute;ponses pr&eacute;cises &agrave; vos questions. Notre qualit&eacute; et notre exp&eacute;rience sont &agrave; votre service.N'h&eacute;sitez pas &agrave; nous contacter si vous avez un besoin d'accompagnement &agrave; domicile d'une personne handicap&eacute;e, &acirc;g&eacute;e ou d&eacute;pendante de fa&ccedil;on temporaire.",
                        texteListing              : "Consultez les services et comp&eacute;tences de Domiblue &agrave; {{ secteur }}. Ce service d&rsquo;aide &agrave; domicile vient en aide aux personnes en situation de handicap et aide au maintien. Nos &eacute;quipes administrent les soins &agrave; domicile des personnes &acirc;g&eacute;es et personnes d&eacute;pendantes. Notre &eacute;quipe est &eacute;galement &agrave; m&ecirc;me de r&eacute;aliser des soins infirmiers &agrave; domicile sur Marseille, Allauch, Aubagne, La Ciotat, Cassis et leurs environs.Depuis plus de 10 ans, nous sommes &agrave; l&rsquo;&eacute;coute et au service des personnes n&eacute;cessitant l&rsquo;aide de professionnels de la sant&eacute;, ainsi que des familles qui recherchent des r&eacute;ponses et des conseils concernant leurs proches.",
                        textePageFinale           : "{% spin %}Vous &ecirc;tes &agrave; la recherche d'|Vous souhaitez faire appel &agrave;|Vous recherchez{% endspin %} une bonne infirmi&egrave;re &agrave; Marseille pour des soins &agrave; domicile&nbsp;ou vous rercherchez une agence proposant :&nbsp;{{ complement }} ? {% spin %}Vous &ecirc;tes dans l'obligation de|Vous devez|Vous n'avez pas d'autre choix que de{% endspin %}&nbsp;rester {% spin %}&agrave; domicile|&agrave; la maison|chez vous|dans votre maison ou appartement{% endspin %} {% spin %}durant une certaine dur&eacute;e|pendant une longue p&eacute;riode{% endspin %} et {% spin %}devez suivre des soins|des soins vous ont &eacute;t&eacute; prescrits|vous avez besoin de soins r&eacute;guliers{% endspin %}&nbsp;?{% spin %}Domiblue est|Notre agence vous propose|Nous vous proposons|Notre soci&eacute;t&eacute; vous propose|Domiblue vous propose|L'agence Domiblue &agrave; {{ secteur }} vous propose{% endspin %} {% spin %}un service|de nombreuses prestations|une gamme de prestations compl&egrave;te{% endspin %} {% spin %}d'aide &agrave; domicile|de maintien &agrave; domicile{% endspin %} qui accompagne les personnes en perte d'autonomie (exemple : au retour &agrave; domicile apr&egrave;s une op&eacute;ration, {% spin %}personnes en situation de handicap|personnes handicap&eacute;es|personnes en fauteuil roulant{% endspin %}, pour les {% spin %}personnes &acirc;g&eacute;es|seniors{% endspin %}, etc.). Que ce soit pour le maintien et le soin &agrave; domicile, {% spin %}les courses et l'aide aux repas|l'aide &agrave; la toilette|l'aide au coucher et au lever|la prise de m&eacute;dimants|les t&acirc;ches m&eacute;nag&egrave;res|le lavage et l'entretien du linge{% endspin %}, {% spin %}r&eacute;aliser|s'occuper|prendre en charge|g&eacute;rer{% endspin %} {% spin %}des t&acirc;ches administratives|de l'administratif|des papiers administratifs &agrave; remplir et envoyer{% endspin %}, l'assistance et l'accompagnement &agrave; domicile des personnes &acirc;g&eacute;es, {% spin %}l'&eacute;quipe Domiblue|notre agence|notre soci&eacute;t&eacute; sp&eacute;cialis&eacute;e|notre entreprise{% endspin %} {% spin %}peut|est &agrave; votre disposition pour|est disponible pour{% endspin %} all&eacute;ger {% spin %}votre quotidien|vos t&acirc;ches journali&egrave;res|votre vie de tous les jours ou celle de {% spin %}vos proches|votre famille|votre entourage{% endspin %} &agrave; {{ secteur }} et&nbsp;{% spin %}aux alentours|&agrave; ses environs|&agrave; proximit&eacute;{% endspin %}.{% spin %}Dans le cadre de|Si vous optez pour des|Lors de la mise en place de{% endspin %} {% spin %}prestations d'aide &agrave; la personne|services d'aide &agrave; la personne|services d'aide aux personnes &acirc;g&eacute;es ou handicap&eacute;es|services d'aide &agrave; domicile|services de maintien &agrave; domicile{% endspin %}, des {% spin %}aides p&eacute;cuniaires|aides financi&egrave;res|aides sociales{% endspin %} {% spin %}sont propos&eacute;es pour vous aider|sont disponibles|existent sous certaines conditions|peuvent &ecirc;tre obtenues|peuvent &ecirc;tre demand&eacute;es{% endspin %} :&nbsp;{% spin %}Allocation Suppl&eacute;mentaire d'Invalidit&eacute; (ASI), CNSA (Caisse Nationale de Solidarit&eacute; pour l'Autonomie, aide &agrave; l'am&eacute;nagement du logement...|Aide au Retour &agrave; Domicile apr&egrave;s Hospitalisation (ARDH), aide financi&egrave;re de la CAF, APA (Allocation Personnalis&eacute;e d'Autonomie)...|ch&egrave;ques emploi service universel CESU, cr&eacute;dit ou r&eacute;duction d'imp&ocirc;ts pour les services &agrave; la personne, aides des caisses de retraite, etc.{% endspin %}{% spin %}Gr&acirc;ce &agrave; notre exp&eacute;rience|Avec notre expertise|Avec un r&eacute;seau disposant de plus de 10 ans d'exp&eacute;rience{% endspin %}, nous pourrons {% spin %}nous adapter &agrave; vos contraintes|r&eacute;pondre parfaitement &agrave; vos attentes|vous proposer des services adapt&eacute;s &agrave; vos besoins{% endspin %}. {% spin %}Contactez-nous !|Prenez rendez-vous sans plus attendre avec Domiblue.|T&eacute;l&eacute;phonez-nous pour toute question ou renseignement suppl&eacute;mentaire.|Domiblue est &agrave; votre service pour tout compl&eacute;ment d'information.{% endspin %}",
                        metaDescriptionPageFinale : "Pour des services d'aide à domicile sur {{ secteur }}, faites appel à {{ nom_commercial }} : aide ménagère, courses et préparation des repas, dame de compagnie... Retrouvez nos services d'aide pour personnes âgées ou handicapées.",
                        titrePageSecteur          : "Nos services d'aide à domicile {{ secteur }}",
                        maxEmailsGroupe           : "150",
                        maxAbonne                 : "2000",
                        maxAnnonceJournal         : "10",
                        maxCaracteresExtrait      : "300",
                        optionsAvancees           : "1",
                        miseEnLigne               : "2017-10-17",
                        facebook                  : "",
                        google                    : "",
                        responsable               : "Jean-Christophe AMARANTINIS",
                        raisonSociale             : "Domiblue",
                        nomCommercial             : "Domiblue",
                        emailEnvoi                : "contact@domiblue.fr",
                        instagram                 : "",
                        pinterest                 : "",
                        linkedin                  : "",
                        twitter                   : "",
                        redirectionsHtaccess      : "RewriteCond %{HTTP_HOST} !www.domiblue.fr$\r\nRewriteRule .* - [S=20]\r\nRewriteRule ^aide+soignante+a+domicile+pour+personne+agee-marseille-z280$ https://www.domiblue.fr/aide-soignante+a+domicile+pour+personne+agee+marseille-z6 [L,R=301]\r\nRewriteRule ^auxiliaire(.*)de(.*)vie(.*)pour(.*)personne(.*)handicapee-marseille-z240$ https://www.domiblue.fr/auxiliaire+de+vie+pour+personne+handicapee+marseille-z46 [L,R=301]\r\nRewriteRule ^aide(.*)a(.*)la(.*)toilette(.*)et(.*)preparation(.*)a(.*)domicile-aubagne-z134$ https://www.domiblue.fr/aide+a+la+toilette+et+preparation+a+domicile+aubagne-z10 [L,R=301]\r\nRewriteRule ^auxiliaire(.*)de(.*)vie(.*)pour(.*)personne(.*)handicapee-gemenos-z237$ https://www.domiblue.fr/auxiliaire+de+vie+pour+personne+handicapee+gemenos-z43 [L,R=301]\r\nRewriteRule ^aide(.*)menagere(.*)pour(.*)maintien(.*)a(.*)domicile-aubagne-z284$ https://www.domiblue.fr/aide+menagere+pour+maintien+a+domicile+aubagne-z18 [L,R=301]\r\nRewriteRule ^dame(.*)de(.*)compagnie(.*)pour(.*)personne(.*)agee-marseille-z90$ https://www.domiblue.fr/dame+de+compagnie+pour+personne+agee+marseille-z38 [L,R=301]\r\nRewriteRule ^livraison(.*)de(.*)repas(.*)pour(.*)personne(.*)agee-aubagne-z64$ https://www.domiblue.fr/livraison+de+repas+pour+personne+agee+aubagne-z26 [L,R=301]\r\nRewriteRule ^dame(.*)de(.*)compagnie(.*)pour(.*)personne(.*)agee-aubagne-z84$ https://www.domiblue.fr/dame+de+compagnie+pour+personne+agee+aubagne-z34 [L,R=301]\r\nRewriteRule ^perte-d-autonomie-temporaire-1.html$ https://www.domiblue.fr/les-aides-a-domicile-incapacite-temporaire-1.html [L,R=301]\r\nRewriteRule ^soins-infirmiers-a-domicile.html$ https://www.domiblue.fr/les-aides-a-domicile-soins-infirmiers-1.html [L,R=301]\r\nRewriteRule ^informations-pratiques--1.html$ https://www.domiblue.fr/faq-1.html [L,R=301]\r\nRewriteRule ^liens-et-adresses-1.html$ https://www.domiblue.fr/guide-local-1.html [L,R=301]\r\nRewriteRule ^toutes-nos-offres-1.html$ https://www.domiblue.fr/toutes-nos-prestations-1.html [L,R=301]\r\nRewriteRule ^personnes-agees-1.html$ https://www.domiblue.fr/les-aides-a-domicile-personnes-agees-1.html [L,R=301]\r\nRewriteRule ^nos-points-forts.html$ https://www.domiblue.fr/les-aides-financieres-1.html [L,R=301]\r\nRewriteRule ^nos-activites-0.html$ https://www.domiblue.fr/nos-activites.html [L,R=301]\r\nRewriteRule ^les-equipes.html$ https://www.domiblue.fr/recrutement.html [L,R=301]\r\nRewriteRule ^nos-metiers.html$ https://www.domiblue.fr/secteurs.html [L,R=301]\r\nRewriteRule ^historique.html$ https://www.domiblue.fr/les-aides-a-domicile-1.html [L,R=301]\r\nRewriteRule ^liens-et-adresses-(.*)$ https://www.domiblue.fr/lien-$1 [L,R=301]",
                        youtube                   : "",
                        viadeo                    : "",
                        niveau                    : "5",
                        metaDescriptionPageSecteur: "",
                        maxExpressionBlocGauche   : "2",
                        maxExpressionBlocDroite   : "4"
                    },
                    stats : {
                        nombreContacts    : "538",
                        nombreExpressions : "87",
                        nombreAnnonces    : "212",
                        nombreLiensUtiles : "21",
                        nombreArchives    : "49",
                        nombreJoursSansMaj: "317",
                        nombreCaracMoy    : "2511.5472"
                    }
                },
                entity : {
                    contract          : {
                        interventions: [
                            {
                                role : "Commercial",
                                user : {
                                    manageable       : true,
                                    role             : {
                                        id        : 29,
                                        externalId: "00ED0000001YIN1MAO",
                                        name      : "Commercial Sud Est C",
                                        class     : "role"
                                    },
                                    active           : true,
                                    externalManagerId: "005D0000002VJzjIAG",
                                    bypass           : 0,
                                    reachable        : true,
                                    id               : 536,
                                    created          : "2012-10-19T06:39:40+00:00",
                                    email            : "pauline.auzeric@jalis.fr",
                                    externalId       : "005D0000002VEjpIAG",
                                    name             : "Pauline AUZERIC",
                                    class            : "user",
                                    displayText      : "Pauline AUZERIC"
                                },
                                id   : 43180,
                                class: "intervention"
                            },
                            {
                                role : "Commercial Duo",
                                user : {
                                    active           : true,
                                    bypass           : 0,
                                    externalManagerId: "005D00000021GvLIAU",
                                    manageable       : true,
                                    role             : {
                                        id        : 89,
                                        externalId: "00ED0000000phEIMAY",
                                        name      : "DR SUD EST ALH",
                                        class     : "role"
                                    },
                                    created          : "2012-10-22T18:21:06+00:00",
                                    email            : "annie.lelouch@jalis.fr",
                                    externalId       : "005D0000002VJzjIAG",
                                    name             : "Annie LELOUCH",
                                    reachable        : true,
                                    id               : 476,
                                    class            : "user",
                                    displayText      : "Annie LELOUCH"
                                },
                                id   : 43181,
                                class: "intervention"
                            },
                            {
                                role : "Coordinateur Duo 1",
                                user : {
                                    manageable       : true,
                                    role             : {
                                        id        : 63,
                                        externalId: "00E57000001CbMnEAK",
                                        name      : "Responsable Coordinateur",
                                        class     : "role"
                                    },
                                    active           : true,
                                    externalManagerId: "005D00000020nCCIAY",
                                    bypass           : 0,
                                    reachable        : true,
                                    id               : 418,
                                    created          : "2013-06-02T15:27:04+00:00",
                                    email            : "marc.biron@jalis.fr",
                                    externalId       : "005D00000033SEzIAM",
                                    name             : "Marc BIRON",
                                    class            : "user",
                                    displayText      : "Marc BIRON"
                                },
                                id   : 43184,
                                class: "intervention"
                            },
                            {
                                role : "Coordinateur Duo 2",
                                user : {
                                    manageable       : true,
                                    role             : {
                                        id        : 39,
                                        externalId: "00ED0000000phEDMAY",
                                        name      : "DIRECTION",
                                        class     : "role"
                                    },
                                    active           : true,
                                    externalManagerId: "005D00000021GvLIAU",
                                    bypass           : 0,
                                    reachable        : true,
                                    id               : 473,
                                    created          : "2012-07-30T09:43:01+00:00",
                                    email            : "paul.nguyen@jalis.fr",
                                    externalId       : "005D00000020nCCIAY",
                                    name             : "Paul NGUYEN",
                                    class            : "user",
                                    displayText      : "Paul NGUYEN"
                                },
                                id   : 43179,
                                class: "intervention"
                            },
                            {
                                role : "Graphiste / Développeur",
                                user : {
                                    manageable       : true,
                                    role             : {
                                        id        : 60,
                                        externalId: "00E57000001sKgaEAE",
                                        name      : "Responsables Graphistes",
                                        class     : "role"
                                    },
                                    active           : true,
                                    externalManagerId: "005D00000020nCCIAY",
                                    bypass           : 0,
                                    reachable        : true,
                                    id               : 437,
                                    created          : "2014-02-28T16:18:14+00:00",
                                    email            : "thomas.hazera@jalis.fr",
                                    externalId       : "005D0000003vIBVIA2",
                                    name             : "Thomas HAZERA",
                                    class            : "user",
                                    displayText      : "Thomas HAZERA"
                                },
                                id   : 43182,
                                class: "intervention"
                            },
                            {
                                role : "Référenceur",
                                user : {
                                    manageable       : true,
                                    role             : {
                                        id        : 52,
                                        externalId: "00E2p000001xxKCEAY",
                                        name      : "Manager Ref",
                                        class     : "role"
                                    },
                                    active           : true,
                                    externalManagerId: "00557000006DODXAA4",
                                    bypass           : 1,
                                    reachable        : true,
                                    id               : 409,
                                    created          : "2014-03-07T10:30:25+00:00",
                                    email            : "elodie.garcia@jalis.fr",
                                    externalId       : "005D0000003vSsAIAU",
                                    name             : "Elodie GARCIA",
                                    class            : "user",
                                    displayText      : "Elodie GARCIA"
                                },
                                id   : 43183,
                                class: "intervention"
                            }
                        ],
                        id           : 21,
                        externalId   : "80057000005WWmtAAG",
                        class        : "contract"
                    },
                    demo              : false,
                    missingTraffic    : null,
                    summary           : {
                        delta1       : 16,
                        delta2       : -5,
                        inactiveSince: null,
                        month1       : 596,
                        month2       : 514,
                        month3       : 541
                    },
                    created           : "2018-02-06T17:02:02+00:00",
                    externalId        : "169248519",
                    missingPermissions: [],
                    name              : "** domiblue.fr All **",
                    updated           : "2018-02-06T17:02:57+00:00",
                    url               : "https://domiblue.fr",
                    reachable         : true,
                    id                : 7405,
                    class             : "view",
                    displayText       : "** domiblue.fr All **"
                },
                traffic: {
                    total: [
                        {
                            channel: {
                                color: "#058dc7",
                                description: "Ce canal correspond au total des sessions, provenant de l'ensemble des canaux",
                                type: "gaid:-1",
                                name: "ALL",
                                id: 1,
                                class: "channel"
                            },
                            total: 15352
                        },
                        {
                            channel: {
                                color: "#edef00",
                                description: "Ce canal correspond au trafic acquis via les résultats naturels des moteurs de recherche",
                                type: "gaid:-5",
                                name: "SEO",
                                id: 2,
                                class: "channel"
                            },
                            total: 11760
                        },
                        {
                            channel: {
                                color: "#af49c5",
                                description: "Ce canal correspond au trafic issu des mails ou d'une url entrée directement dans le navigateur",
                                type: "gaid:-7",
                                name: "DIRECT",
                                id: 3,
                                class: "channel"
                            },
                            total: 2370
                        },
                        {
                            channel: {
                                color: "#50b432",
                                description: "Ce canal correspond au trafic référent, ce sont tous les visiteurs arrivés sur notre site via un lien depuis un site différent",
                                type: "gaid:-8",
                                name: "REFERRAL",
                                id: 4,
                                class: "channel"
                            },
                            total: 1222
                        },
                        {
                            channel: {
                                color: "#ed7e17",
                                description: "Ce canal correspond au trafic issu des campagnes sponsorisées visant les moteurs de recherche et leurs partenaires. La plupart du temps sur Google Ads, mais il faut que ce soit traqué",
                                type: "gaid:-4",
                                name: "PAID SEARCH",
                                id: 5,
                                class: "channel"
                            },
                            total: 0
                        }
                    ],
                    last: [
                        {
                            channel: {
                                color: "#058dc7",
                                description: "Ce canal correspond au total des sessions, provenant de l'ensemble des canaux",
                                type: "gaid:-1",
                                name: "ALL",
                                id: 1,
                                class: "channel"
                            },
                            total: 624
                        },
                        {
                            channel: {
                                color: "#edef00",
                                description: "Ce canal correspond au trafic acquis via les résultats naturels des moteurs de recherche",
                                type: "gaid:-5",
                                name: "SEO",
                                id: 2,
                                class: "channel"
                            },
                            total: 472
                        },
                        {
                            channel: {
                                color: "#af49c5",
                                description: "Ce canal correspond au trafic issu des mails ou d'une url entrée directement dans le navigateur",
                                type: "gaid:-7",
                                name: "DIRECT",
                                id: 3,
                                class: "channel"
                            },
                            total: 142
                        },
                        {
                            channel: {
                                color: "#50b432",
                                description: "Ce canal correspond au trafic référent, ce sont tous les visiteurs arrivés sur notre site via un lien depuis un site différent",
                                type: "gaid:-8",
                                name: "REFERRAL",
                                id: 4,
                                class: "channel"
                            },
                            total: 10
                        },
                        {
                            channel: {
                                color: "#ed7e17",
                                description: "Ce canal correspond au trafic issu des campagnes sponsorisées visant les moteurs de recherche et leurs partenaires. La plupart du temps sur Google Ads, mais il faut que ce soit traqué",
                                type: "gaid:-4",
                                name: "PAID SEARCH",
                                id: 5,
                                class: "channel"
                            },
                            total: 0
                        }
                    ]
                },
            };
        },
    },
);
</script>

