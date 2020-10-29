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
                <slot
                    name="title"
                />
            </b>
        </template>
        <b-card-body>
            <template
                v-if="items.length === 0"
            >
                Aucun trafic enregistré
            </template>
            <template
                v-else
            >
                <b-container
                    :fluid="true"
                >
                    <dl
                        class="row mb-0"
                    >
                        <template
                            v-for="item in items"
                        >
                            <dt
                                class="col-8"
                            >
                                <b-badge
                                    variant="transparent"
                                >
                                    {{ item.channel.name }}
                                </b-badge>
                            </dt>
                            <dd
                                class="col-4 text-right"
                            >
                                <b-badge
                                    v-b-tooltip.hover.right
                                    :style="`background-color:${item.channel.color}; color:${color(item.channel.color)};`"
                                    :title="item.channel.description"
                                    class="CSS-help"
                                    pill
                                >
                                    {{ total(item.total) }}
                                    <FontAwesomeIcon
                                        :icon="icons.infoCircle"
                                        size="xs"
                                    />
                                </b-badge>
                            </dd>
                        </template>
                    </dl>
                </b-container>
            </template>
        </b-card-body>
    </b-card>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';
import * as numbers     from '../../util/helpers/numbers';

export default Vue.extend(
    {
        computed: {
            icons() {
                return {
                    infoCircle: [
                        'fas',
                        'info-circle',
                    ],
                };
            },
        },
        methods : {
            color(
                value,
            ) {
                let color = value;
                if (color.startsWith('#')) {
                    color = color.slice(1);
                }
                if (color.length === 3) {
                    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
                }
                if (color.length !== 6) {
                    throw new Error(`Invalid HEX color: '${color}'`);
                }

                const pigment = (
                    index,
                ) =>
                {
                    const min    = index * 2;
                    const max    = min + 2;
                    const valueS = color.slice(
                        min,
                        max,
                    );

                    return parseInt(
                        valueS,
                        16,
                    );
                };

                const red   = pigment(
                    0,
                ) * 0.299;
                const green = pigment(
                    1,
                ) * 0.587;
                const blue  = pigment(
                    2,
                ) * 0.114;

                return red + green + blue > 186
                    ? '#000000'
                    : '#ffffff';
            },
            total(
                value,
            ) {
                return numbers.render(value);
            },
        },
        props   : {
            items: {
                required: true,
                type    : Array,
            },
        },
    },
);
</script>

