<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> SyncDiaryInteractive </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.label"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from '@/components/EssentialLink.vue'

const linksList = [
  {
    label: 'Početna stranica',
    icon: 'home',
    link: ''
  },
  {
    label: 'Aktivnost',
    caption: '(Kalendar)',
    icon: 'history',
    link: '/aktivnost/'
  },
  {
    label: 'Događaj',
    caption: 'Unos aktivnosti koja se dogodila',
    icon: 'event',
    link: '/dogadjaj/'
  },
  {
    label: 'Poruka',
    caption: 'Moje poruke',
    icon: 'message',
    link: '/poruka/'
  },
  {
    label: 'Timovi',
    caption: 'Upravljanje timovima',
    icon: 'groups',
    link: '/timovi/'
  },
  {
    label: 'Korisnik',
    caption: 'O meni',
    icon: 'person',
    link: '/korisnik/'
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
