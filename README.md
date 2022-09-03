# ember-simple-auth-oauther

This is a complementary addon for [ember-oauther](https://github.com/sinankeskin/ember-oauther) but it can be used individually too.


## Compatibility

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v14 or above


## Installation

```
ember install ember-simple-auth-oauther
```

## Usage

There are 3 authenticators.

1. oauther: For whatever you return json data.
2. oauther-token: For same token logic with [ember-simple-auth-token](https://github.com/jpadilla/ember-simple-auth-token)
3. oauther-jwt: For same jwt logic with [ember-simple-auth-token](https://github.com/jpadilla/ember-simple-auth-token)

You should set all required parameters in environment like;

```javascript
ENV['ember-simple-auth-oauther'] = {
  tokenPropertyName: 'access_token',
  serverTokenEndpoint: `${ENV.apiURL}/oauth/login`,
  tokenExpirationInvalidateSession: false,
  refreshAccessTokens: true,
  refreshTokenPropertyName: 'refresh_token',
  serverTokenRefreshEndpoint: `${ENV.apiURL}/users/refresh_token`,
  refreshLeeway: 300,
};
```

For example; you want to use your own backend and you are providing jwt access and refresh token then simply use,

```javascript
import Oauth2CodeSignInRoute from 'ember-oauther/routes/oauth2-code-sign-in';
import { inject as service } from '@ember/service';

export default class Oauth2SignInRoute extends Oauth2CodeSignInRoute {
  @service
  session;

  model(params) {
    this.session
      .authenticate('authenticator:oauther-jwt', params)
      .then(() => {
        console.log('Logged in');
      })
      .catch((e) => {
        console.error('error', e);
      });
  }
}
```

This writes in session. For example;

```json
{
  "authenticator": "authenticator:oauther-jwt",
  "access_token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MywiZXhwIjoxNjE1MzE3MzM3fQ.UnuFCfPtQC9bbO6doMOAnkE5QoRbbTNoKw0eN-7Fyt8",
  "refresh_token": "mvg6vjvHPqsKXQ_a4AuAnA",
  "exp": 1615317337,
  "tokenData": {
    "user_id": 43,
    "exp": 1615317337
  }
}
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
