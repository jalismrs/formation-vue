<template
    lang="html"
>
    <main
        id="CSS-main"
    >
        <OverviewView />
    </main>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';
import {OverviewView} from 'App/views';

export default Vue.extend(
    {
        components: {
            OverviewView,
        }
    }
);
</script>

