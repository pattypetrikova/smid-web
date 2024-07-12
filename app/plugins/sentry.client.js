import * as Sentry from '@sentry/vue';

export default defineNuxtPlugin((nuxtApp) => {
	const router = useRouter();
	const {public: env} = useRuntimeConfig();

	if (!env.SENTRY_DSN) {
		return;
	}

	Sentry.init({
		app: nuxtApp.vueApp,
		dsn: env.SENTRY_DSN,
		environment: env.ENV_NAME || 'dev',
		integrations: [
			new Sentry.BrowserTracing({
				routingInstrumentation: Sentry.vueRouterInstrumentation(router),
			}),
			new Sentry.Replay(),
		],

		// Configure this whole part as you need it!

		tracesSampleRate: 1, // Change in prod

		// Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
		tracePropagationTargets: ['localhost:3000', env.NUXT_PUBLIC_SITE_URL],

		replaysSessionSampleRate: 1.0, // Change in prod
		replaysOnErrorSampleRate: 1.0, // Change in prod if necessary
	});
});
