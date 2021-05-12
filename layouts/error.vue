<template>
	<main id="ErrorPage">
		<h1 v-if="error.statusCode === 404">{{ error.message }}</h1>
		<p v-if="error.statusCode === 404 && this.$i18n.locale === 'en'">The requested page not found.</p>
		<p v-if="error.statusCode === 404 && this.$i18n.locale === 'ru'">Запрашиваемая страница не найдена.</p>
		<h1 v-else>Something goes wrong...</h1>
		<nuxt-link v-if="this.$i18n.locale === 'en'" class="linkWrapper" :to="localePath('/')">
			Go to the home page.
		</nuxt-link>
		<nuxt-link v-else class="linkWrapper" :to="localePath('/')">На главную страницу.</nuxt-link>
		<p>
			Error code: <strong>{{ error.statusCode }}</strong>
		</p>
	</main>
</template>

<script>
export default {
	name: 'Error',
	props: {
		error: {
			type: Object,
			default: () => {},
		},
	},
}
</script>

<style lang="scss">
#ErrorPage {
	align-items: center;
	justify-content: space-evenly;
}

.linkWrapper {
	font-size: 3rem;
	padding: 1em 0;
}

@media (max-width: 900px) {
	#ErrorPage h1 {
		text-align: center;
	}

	.linkWrapper {
		font-size: 1.5rem;
		padding: 1em 0;
	}
}
</style>
