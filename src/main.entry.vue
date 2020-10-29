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
import {default as Vue}                from 'vue';
import {default as TheFooterComponent} from './main/the-footer.component.vue';
import {default as TheHeaderComponent} from './main/the-header.component.vue';
import {default as TheMainComponent}   from './main/the-main.component.vue';

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
