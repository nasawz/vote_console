import Parse from 'parse';
import config from '../config';
Parse.initialize(config.clientKEY);
Parse.serverURL = '/api/parse';
Parse.User.enableUnsafeCurrentUser();
export default Parse;
