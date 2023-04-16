export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.439f1b68.js","imports":["_app/immutable/entry/start.439f1b68.js","_app/immutable/chunks/index.82d196c4.js","_app/immutable/chunks/singletons.8ce06ad8.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.783bfa03.js","imports":["_app/immutable/entry/app.783bfa03.js","_app/immutable/chunks/index.82d196c4.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
