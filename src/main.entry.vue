<template
    lang="html"
>
    <div>
        <TheHeaderComponent />
        <TheMainComponent />
        <TheFooterComponent />
    </div>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';
import {
    TheFooterComponent,
    TheHeaderComponent,
    TheMainComponent,
}                       from './main';

export default Vue.extend(
    {
        components: {
            TheFooterComponent,
            TheHeaderComponent,
            TheMainComponent,
        },
        name: 'MainEntry',
    },
);
</script>
