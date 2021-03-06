import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import { assign } from '@ember/polyfills';
import config from 'ember-get-config';
import { reject } from 'rsvp';

export default class OAutherAuthenticator extends BaseAuthenticator {
  constructor() {
    super(...arguments);

    const conf = config['ember-simple-auth-oauther'] || {};
    this.userInformationEndpoint = conf.userInformationEndpoint;
    this.headers = conf.headers || {};
  }

  async authenticate(params, headers) {
    const response = await this.makeRequest(
      this.userInformationEndpoint,
      params,
      assign({}, this.headers, headers)
    );

    return response.json;
  }

  async makeRequest(url, data, headers) {
    const response = await fetch(url, {
      method: 'POST',
      headers: assign(
        {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        headers
      ),
      body: JSON.stringify(data),
    });

    const returnData = {
      statusText: response.statusText,
      status: response.status,
      headers: response.headers,
    };

    try {
      const text = await response.text();

      returnData.text = text;

      try {
        returnData.json = JSON.parse(text);
      } catch (e) {
        return reject(returnData);
      }

      if (response.ok) {
        return returnData;
      } else {
        return reject(returnData);
      }
    } catch (e) {
      return reject(returnData);
    }
  }
}
