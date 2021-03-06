//-------------------------------------------------------------------------------
// Imports
//-------------------------------------------------------------------------------

import {
    Class,
    Obj
} from 'bugcore';


//-------------------------------------------------------------------------------
// Declare Class
//-------------------------------------------------------------------------------

/**
 * @class
 * @extends {Obj}
 */
const Classpack = Class.extend(Obj, {

    _name: 'classpack.Classpack',


    //-------------------------------------------------------------------------------
    // Constructor
    //-------------------------------------------------------------------------------

    /**
     * @constructs
     */
    _constructor() {

        this._super();


        //-------------------------------------------------------------------------------
        // Public Properties
        //-------------------------------------------------------------------------------

    },


    //-------------------------------------------------------------------------------
    // Init Methods
    //-------------------------------------------------------------------------------

    /**
     * @return {Classpack}
     */
    init() {
        const _this = this._super();
        if (_this) {
            _this.configure({});
        }
        return _this;
    },


    //-------------------------------------------------------------------------------
    // Getters and Setters
    //-------------------------------------------------------------------------------

    //-------------------------------------------------------------------------------
    // Public Methods
    //-------------------------------------------------------------------------------

    /**
     * @param {{
     * }} configObject
     */
    configure(configObject) {
        console.log(configObject);
    },

    /**
     * @param {string} key
     * @param {{
     *      target: string=
     * }=} options
     * @return {Promise}
     */
    configDelete(key, options) {
        console.log(key, options);
    },

    /**
     * @param {string} key
     * @param {{
     *      target: string=
     * }=} options
     * @returns {Promise}
     */
    configGet(key, options) {
        console.log(key, options);
    },

    /**
     * @param {string} key
     * @param {*} value
     * @param {{
     *      target: string=
     * }=} options
     * @return {Promise}
     */
    configSet(key, value, options) {
        console.log(key, value, options);
    },

    /**
     * @param {{
     *      execPath: string=,
     *      target: string=
     * }=} options
     * @return {Promise}
     */
    context(options) {
        console.log(options);
    },

    /**
     * @param {string} recipeQuery
     * @return {function(function(Error), *...)}
     */
    get(recipeQuery) {
        console.log(recipeQuery);
    },

    /**
     * @param {string} email
     * @param {string} password
     * @param {{
     *      target: string=
     * }=} options
     * @return {Promise}
     */
    login(email, password, options) {
        console.log(email, password, options);
    },

    /**
     * @param {{
     *      target: string=
     * }=} options
     * @return {Promise}
     */
    logout(options) {
        console.log(options);
    },

    /**
     * @param {string} classpackPath
     * @param {{
     *      target: string=
     * }=} options
     * @return {Promise}
     */
    publish(classpackPath, options) {
        console.log(classpackPath, options);
    },

    /**
     * @param {string} username
     * @param {string} email
     * @param {string} password
     * @param {{
     *      target: string=
     * }=} options
     * @return {Promise}
     */
    signUp(username, email, password, options) {
        console.log(username, email, password, options);
    }
});


//-------------------------------------------------------------------------------
// Private Static Properties
//-------------------------------------------------------------------------------

/**
 * @static
 * @private
 * @type {Classpack}
 */
Classpack.instance     = null;


//-------------------------------------------------------------------------------
// Static Methods
//-------------------------------------------------------------------------------

/**
 * @static
 * @return {Classpack}
 */
Classpack.getInstance = function() {
    if (Classpack.instance === null) {
        Classpack.instance = new Classpack();
    }
    return Classpack.instance;
};


//-------------------------------------------------------------------------------
// Static Proxy
//-------------------------------------------------------------------------------

Proxy.proxy(Classpack, Proxy.method(Classpack.getInstance), [
    'configure',
    'configDelete',
    'configGet',
    'configSet',
    'context',
    'get',
    'login',
    'logout',
    'publish',
    'signUp'
]);


//-------------------------------------------------------------------------------
// Exports
//-------------------------------------------------------------------------------

export default Classpack;
