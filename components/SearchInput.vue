<script setup lang="ts">
interface State {
    loaded: boolean
    loading: boolean
    value: string
}

const state = reactive<State>({
    loaded: false,
    loading: false,
    value: ''
})

interface Emits {
  (e: 'search', value: string): void
}
const emit = defineEmits<Emits>()

const handleSearch = () => {
    state.loading = true
    setTimeout(() => {
        state.loading = false
        state.loaded = true
    }, 2000)
    emit('search', state.value)
}
</script>
<template>
    <v-text-field
        v-model="state.value"
        :loading="state.loading"
        density="compact"
        variant="solo"
        label="検索"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="handleSearch"
     />
</template>
