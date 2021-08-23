import { UserInterface } from '../../_models/user.interface';

export interface UserStateInterface {
  user: UserInterface | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}
