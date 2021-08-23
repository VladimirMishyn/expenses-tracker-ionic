import { UserInterface } from '../../_models/user.interface';

export interface UserStateInterface {
  user: UserInterface | null;
  isLoaded: boolean;
  isLoading: boolean;
  error: string | null;
}
