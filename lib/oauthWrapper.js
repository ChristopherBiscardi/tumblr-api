var OAuth= require('oauth').OAuth;

// build the OAuth request authorization header
OAuth.prototype._buildAuthorizationHeaders= function(orderedParameters) {
  var authHeader="OAuth ";
  if( this._isEcho ) {
    authHeader += 'realm="' + this._realm + '",';
  }

  for( var i= 0 ; i < orderedParameters.length; i++) {
     // Whilst the all the parameters should be included within the signature, only the oauth_ arguments
     // should appear within the authorization header.
     if( this._isParameterNameAnOAuthParameter(orderedParameters[i][0]) ) {
      authHeader+= "" + this._encodeData(orderedParameters[i][0])+"=\""+ this._encodeData(orderedParameters[i][1])+"\", ";
     }
  }

  authHeader= authHeader.substring(0, authHeader.length-1);
//custom code

authHeader.replace(',\ ')

//custom code
console.log(authHeader)
  return authHeader;
}

module.exports = OAuth;