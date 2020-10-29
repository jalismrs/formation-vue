<template
    lang="html"
>
    <main>
        <OverviewView />
    </main>
</template>

<script
    lang="js"
>
import {default as Vue} from 'vue';
import {OverviewView}   from './the-main';

export default Vue.extend(
    {
        components: {
            OverviewView,
        }
    }
);
</script>

