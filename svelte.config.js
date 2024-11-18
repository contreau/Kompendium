import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		prerender: {
			handleHttpError: 'warn'
		},
		adapter: adapter()
	}
};
