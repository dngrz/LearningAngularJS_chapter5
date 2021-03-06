'use strict';

/* Services */

var blogServices = angular.module('blogServices', ['ngResource']);

blogServices.factory('BlogPost', ['$resource',
    function($resource) {
        return $resource("http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/blogPost", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);
