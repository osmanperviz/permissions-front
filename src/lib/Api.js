class Api {

  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static getLocationData(lat, lot) {
    return Api.xhr(`${lat},${lot}&sensor=false`, null,'GET',  Api.google_geo_endpoint)
  }
  static get(route) {
    return Api.xhr(route, null, 'GET')
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return Api.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb, host=Api.backend_endpoint) {
    const url = `${localhost:3001}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
    options.headers = Api.headers()
    return fetch(url, options).then( resp => {
      let json = resp.json();
      if(resp.ok) {
        return json
      }
      return json.then(err => {throw err})
    })
  }
}

export default Api
Contact GitHub
