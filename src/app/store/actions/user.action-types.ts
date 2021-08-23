export enum UserActionTypes {
  loginWithCredentials = '[Auth page] User clicked login in form',
  loginWithCredentialsSuccess = '[API Auth] Authenticating user success',
  loginWithCredentialsFailure = '[API Auth] Authenticating user failure',

  createUser = '[Auth page] User clicked sign up in form',
  createUserSuccess = '[API Auth] Creating user success',
  createUserFailure = '[API Auth] Creating user failure',

  getCurrentUser = '[Inside of application] User has ',
  getCurrentUserSuccess = '[API Auth] Requesting user success',
  getCurrentUserFailure = '[API Auth] Requesting user failure',

  logout = '[User click] Logout button clicked',
  unauthorizedAccess = '[Interceptor] Interceptor received 401',
}
