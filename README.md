# empty-frontend

openapi-generator-cli generate -g typescript-fetch \
-i ./src/api/openapi/blog/blog.swagger.json \
-o src/api/blog

## Troubleshooting

### prettier-eslint-cli:

Failed to load plugin 'react-hooks' declared in 'CLIOptions'  
replace `node_modules/@rushstack/eslint-patch/lib/modern-module-resolution.js`251 line: `return originalResolve.call(this, moduleName, ctx.filePath);`to `return originalResolve.call(this, moduleName, ctx.filePath || relativeToPath);`

### docker envoy
docker run --name envoy -p 51051:51051 -it --rm \
  -v "vsc-remote-containers-empty:/workspaces:ro" \
  envoyproxy/envoy:v1.25-latest -c /workspaces/empty-backend/envoy.yaml
