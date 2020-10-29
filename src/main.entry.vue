<template
    lang="html"
>
    <div
        class="d-flex flex-column h-100"
    >
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
    },
);
</script>
