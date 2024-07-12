export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig();

	const setMetaData = ({title, description}) => {
		useHead({
			title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: description
				},
				{
					hid: 'og:type',
					property: 'og:site_name',
					content: 'website'
				},
				{
					hid: 'og:site_name',
					property: 'og:site_name',
					content: config.public.siteName
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: title
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: description
				}
			]
		});

		defineOgImageComponent('Default', {
			title,
			siteName: config.public.siteName
		});
	};

	nuxtApp.provide('meta', {
		setMetaData
	});
});
