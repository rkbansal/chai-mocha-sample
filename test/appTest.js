const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
    it('blablablbala', function(){
        assert.equal(app(),'hello');
    });
});