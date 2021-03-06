import OAutherAuthenticator from 'ember-simple-auth-token/authenticators/oauther';
import OAutherJWTAuthenticator from 'ember-simple-auth-token/authenticators/oauther-jwt';
import OAutherTokenAuthenticator from 'ember-simple-auth-token/authenticators/oauther-token';

export function initialize(application) {
  application.register('authenticator:oauther', OAutherAuthenticator);
  application.register('authenticator:oauther-jwt', OAutherJWTAuthenticator);
  application.register(
    'authenticator:oauther-token',
    OAutherTokenAuthenticator
  );
}

export default {
  name: 'ember-simple-auth-oauther',
  before: 'ember-simple-auth-token',
  initialize,
};
