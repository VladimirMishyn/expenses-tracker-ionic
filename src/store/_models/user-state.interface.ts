import { UserInterface } from '../../app/_models/user.interface';

export interface UserStateInterface {
  user: UserInterface | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}
