<template>
	<main>
		<h1>Blog</h1>
	</main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

@Component
export default class Blog extends Vue {
  async asyncData(ctx: Context): Promise<Object> {
    const { $content, app } = ctx
    const news: any = await $content(`${app.i18n.locale}/news`)
      .sortBy('slug', 'desc')
      .fetch()
    return { news }
  }
}
</script>

<style></style>
