import { SwaggerUI } from './SwaggerUI';
import 'swagger-ui-react/swagger-ui.css';

const getOpenapi = (name:string) => import(`@/api/openapi/${name}/${name}.swagger.json`);

export default async function App({ params: { openapi } }:{ params: { openapi:string } }) {
  const spec = await getOpenapi(openapi);
  console.log(1111, spec);
  return <SwaggerUI spec={spec} />;
}
