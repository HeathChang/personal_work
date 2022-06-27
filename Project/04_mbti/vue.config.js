module.exports = {
	pages : {
		index : {
			entry : 'src/main.js',
			title : ''
		}
	},
	lintOnSave : false,
	devServer : {
		host : '0.0.0.0',
		proxy : {
			'/api' : {
				target : 'http://localhost:3000',
				changeOrigin: true,
				pathRewrites :{
					'^/api': ''
				}
			}
		}
	},
}