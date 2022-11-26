<script setup lang="ts">
import { useInstagram } from '@/composables/useInstagram'
const { getRecentMedia, medias } = useInstagram()

const handleSearch = async (keyword: string) => {
  await getRecentMedia(keyword)
}
</script>

<template>
  <div class="wrapper">
    <SearchInput class="mt-8" @search="handleSearch" />
    <v-row class="my-8">
        <v-col
          v-for="media in medias"
          :key="media.id"
          class="d-flex child-flex p-2"
          cols="4"
        >
        <v-card min-width="100%">
          <v-img
            :src="media.media_url"
            aspect-ratio="1"
            cover
            class="align-end"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
        </v-col>
    </v-row>
  </div>
</template>

<stype lang="scss" scoped>
  .wrapper {
    width: 65%;
    margin: 0 auto;
  }
</stype>
