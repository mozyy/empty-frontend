exports = {
  entryPoints: ['../src/index.tsx'],
  bundle: true,
  sourcemap: true,
  target: [
    'es2020',
    // 'chrome58',
    // 'firefox57',
    // 'safari11',
    // 'edge16',
  ],
  outfile: 'dist/out.js',
  define: {
    'process.env.NODE_ENV':'"development"'
  },
  minify: true,
  format: 'esm',
  loader: {
    '.png': 'dataurl',
    '.svg': 'text',
  },
  assetNames: 'assets/[name]-[hash]',
}