import { app } from '../app';
import { userApis } from './user/usersApis';

export default function ConfigApiRoutes() {
  app.use('/api', userApis);
}

