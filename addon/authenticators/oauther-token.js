/* eslint-disable ember/classic-decorator-hooks */
import TokenAuthenticator from 'ember-simple-auth-token/authenticators/token';
import { getOwner } from '@ember/application';
export default class OAutherTokenAuthenticator extends TokenAuthenticator {
  init() {
    super.init(...arguments);

    const config =
      getOwner(this).resolveRegistration('config:environment') || {};

    const conf = config['ember-simple-auth-oauther'] || {};
    this.serverTokenEndpoint = conf.serverTokenEndpoint || '/api/token-auth/';
    this.tokenPropertyName = conf.tokenPropertyName || 'token';
    this.headers = conf.headers || {};
  }
}
