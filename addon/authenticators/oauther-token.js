import TokenAuthenticator from 'ember-simple-auth-token/authenticators/token';
import config from 'ember-get-config';

export default class OAutherTokenAuthenticator extends TokenAuthenticator {
  constructor() {
    super(...arguments);

    const conf = config['ember-simple-auth-oauther'] || {};
    this.serverTokenEndpoint = conf.serverTokenEndpoint || '/api/token-auth/';
    this.tokenPropertyName = conf.tokenPropertyName || 'token';
    this.headers = conf.headers || {};
  }
}
