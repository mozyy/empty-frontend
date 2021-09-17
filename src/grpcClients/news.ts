import { grpcAddress } from '../env';
import { NewsClient } from '../proto/news/NewsServiceClientPb';

export const newsClient = new NewsClient(grpcAddress);

export default {};
