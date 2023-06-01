import { SwaggerUI } from './SwaggerUI';
import 'swagger-ui-react/swagger-ui.css';

const getOpenapi = (name:string) => import(`@/openapi/docs/${name}/${name}.swagger.json`);

export default async function App({ params: { openapi } }:{ params: { openapi:string } }) {
  const spec = await getOpenapi(openapi);
  return <SwaggerUI spec={spec} />;
}
