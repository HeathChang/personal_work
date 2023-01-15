module.exports = {
	pages : {
		index : {
			entry : 'src/main.js',
			title : ''
		}
	},
	lintOnSave : false,
	devServer : {
		disableHostCheck: true,
		host : '0.0.0.0',
		port: 8080,
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