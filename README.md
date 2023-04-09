# empty-frontend

openapi-generator-cli generate -g typescript-fetch \
-i ./src/api/openapi/blog/blog.swagger.json \
-o src/api/blog

## Troubleshooting

### prettier-eslint-cli:

Failed to load plugin 'react-hooks' declared in 'CLIOptions'  
replace `node_modules/@rushstack/eslint-patch/lib/modern-module-resolution.js`251 line: `return originalResolve.call(this, moduleName, ctx.filePath);`to `return originalResolve.call(this, moduleName, ctx.filePath || relativeToPath);`
