var tumblr = require('../lib/tumblr');
tumblr.setApiKey('zwCYS21LXVA7TxungBBebp8CrwTI71WAMizJ8NgUTHuMltHl9V');
tumblr.setConsumerSecret('GsoAUDPum5u9iAwFsYwXjXU2J80hXyLIlcyxxN89y0tOuX9WaG');

//tumblr.getBlogInfo({blogname: 'christopherbiscardi.tumblr.com'}, callback)

/*tumblr.getFollowers({
	oauth_access_token: 'eLTXRJoN2jtoIYbqX3u88n0jsMWgvk8rW9Z1MTxz1zOWhfeJtl',
	oauth_access_token_secret: '8EA9vB44hR42hV2iYXjTrcwPrAAuhHHTBF29mV97iRDO0xlADh',
	blogname: 'christopherbiscardi.tumblr.com'
}, oauthCallback)
*/

/*tumblr.getPublishedPosts({
	blogname: 'christopherbiscardi.tumblr.com',
	type: 'photo',
	params:
	  {
		limit: 1
	}
	}, callback)
	*/
tumblr.getQueuedPosts({
		oauth_access_token: 'vAin7vNBAum6G30OmdkJNsphEeQXiNReeeoem9fE8w9zyLtwfp',
		oauth_access_token_secret: 'XrgoYHu4PRyYoyCpdihVXe2Ir9cvqfP5PyQV9oqNlHczvGXa2n',
		blogname: 'christopherbiscardi.tumblr.com'
	}, oauthCallback)

function callback(chunk) {
	console.log(chunk)
}
function oauthCallback(data) {
	console.log(data)
}
