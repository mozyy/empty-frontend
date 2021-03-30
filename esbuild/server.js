const config = require('./config')
const start = new Date()
console.log(123, start)

require('esbuild').serve({
  servedir: 'build',
  port: 8000,
}, {
  ...config,
  define: {
    'process.env.NODE_ENV':'"development"'
  },
}).then(()=>{
  console.log(123, Date.now(), Date.now() - start)
}).catch(() => process.exit(1));