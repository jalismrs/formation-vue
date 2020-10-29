<template
    lang="html"
>
    <div
        v-if="display"
        class="col-12 row"
    >
        <dt
            class="col-4"
        >
            {{ intervention.role }}
        </dt>
        <dd
            class="col-8"
        >
            <UserEntityLink
                :entity="intervention.user"
            />
        </dd>
    </div>
</template>

<script
    lang="js"
>
import {remove as removeDiacritics} from 'diacritics';
import {default as Vue}             from 'vue';
import {UserEntityLink}             from '../../../../../components/link';

export default Vue.extend(
    {
        components: {
            UserEntityLink,
        },
        computed  : {
            display() {
                const regex = /controle/i;
                const role  = removeDiacritics(this.intervention.role);

                return !regex.test(role);
            },
        },
        props     : {
            intervention: {
                required: true,
                type    : Object,
            },
        },
    },
);
</script>

