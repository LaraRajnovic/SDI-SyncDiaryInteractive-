<template>
  <q-page padding>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card bg-secondary text-white" v-for="item in timovi" :key="item">
        <q-card-section> <!-- Dodati v-for-->
          <div class="text-h6">{{ item.naziv }}</div>
          <div class="text-subtitle2">{{ item.opis }}</div>
          <div class="text-subtitle3">{{ item.datum_osnivanja }}</div>
        </q-card-section>
        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
//
const timovi = [{
  naziv: 'SDI',
  opis: 'Opis tima',
  datum_osnivanja: '26.11.2026',
},
{
  naziv: 'Tim2',
  opis: 'Opis tima2',
  datum_osnivanja: '26.11.2026',
},
{
  naziv: 'Tim3',
  opis: 'Opis tima3',
  datum_osnivanja: '26.11.2026',
},
]
</script>
