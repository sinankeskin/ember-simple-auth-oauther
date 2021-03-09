/* eslint-disable ember/classic-decorator-hooks */
import JWTAuthenticator from 'ember-simple-auth-token/authenticators/jwt';
import { getOwner } from '@ember/application';

export default class OAutherJWTAuthenticator extends JWTAuthenticator {
  init() {
    super.init(...arguments);

    const config =
      getOwner(this).resolveRegistration('config:environment') || {};

    const conf = config['ember-simple-auth-oauther'] || {};
    this.serverTokenEndpoint = conf.serverTokenEndpoint || '/api/token-auth/';
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
    this.headers = conf.headers || {};
  }
}
