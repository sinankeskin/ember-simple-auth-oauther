import JWTAuthenticator from 'ember-simple-auth-token/authenticators/jwt';
import config from 'ember-get-config';

export default class OAutherJWTAuthenticator extends JWTAuthenticator {
  constructor() {
    super(...arguments);

    const conf = config['ember-simple-auth-oauther'] || {};
    this.tokenDataPropertyName = conf.tokenDataPropertyName || 'tokenData';
    this.refreshAccessTokens =
      conf.refreshAccessTokens === false ? false : true;
    this.tokenExpirationInvalidateSession =
      conf.tokenExpirationInvalidateSession === false ? false : true;
    this.serverTokenRefreshEndpoint =
      conf.serverTokenRefreshEndpoint || '/api/token-refresh/';
    this.refreshTokenPropertyName =
      conf.refreshTokenPropertyName || 'refresh_token';
    this.tokenExpireName = conf.tokenExpireName || 'exp';
    this.refreshLeeway = conf.refreshLeeway || 0;
  }
}
