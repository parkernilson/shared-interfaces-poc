<!-- This component is a proof of concept for using shared types with firebase functions -->
<script lang="ts">
    import type { SharedType } from 'shared/interfaces/SharedType'
    
    let shared: SharedType = {
        shared: true,
        anotherField: "anotherField"
    }

</script>

<h1>Shared: {shared.shared}</h1>