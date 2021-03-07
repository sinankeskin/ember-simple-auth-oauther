import TokenAuthenticator from 'ember-simple-auth-token/authenticators/token';
import classic from 'ember-classic-decorator';
import config from 'ember-get-config';

@classic
export default class OAutherTokenAuthenticator extends TokenAuthenticator {
  init() {
    super.init(...arguments);

    const conf = config['ember-simple-auth-oauther'] || {};
    this.serverTokenEndpoint = conf.serverTokenEndpoint || '/api/token-auth/';
    this.tokenPropertyName = conf.tokenPropertyName || 'token';
    this.headers = conf.headers || {};
  }
}
