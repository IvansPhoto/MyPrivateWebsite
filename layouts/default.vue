<template>
	<div>
		<Nav />
		<Nuxt />
		<Footer />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'

@Component
export default class Default extends Vue {}
</script>

<style></style>
