const config = require('./config')
const start = new Date()
console.log(123, start, config)

require('esbuild').build({
  ...config,
  define: {
    'process.env.NODE_ENV':'"production"'
  },
}).then(()=>{
  console.log(123, Date.now(), Date.now() - start)
}).catch(() => process.exit(1));