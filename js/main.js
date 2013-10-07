require.config({
    paths: {
        jquery:                 'libs/jquery/jquery-min',
        underscore:             'libs/underscore/underscore-min',
        backbone:               'libs/backbone/backbone-min',
        templates:              '../templates',
        handlebars:             'libs/handlebars/handlebars',
        foundation:             'libs/foundation/foundation',
        'foundation.alerts':    'libs/foundation/foundation.alerts',
        'foundation.clearing':  'libs/foundation/foundation.clearing',
        'foundation.cookie':    'libs/foundation/foundation.cookie',
        'foundation.dropdown':  'libs/foundation/foundation.dropdown',
        'foundation.forms':     'libs/foundation/foundation.forms',
        'foundation.joyride':   'libs/foundation/foundation.joyride',
        'foundation.magellan':  'libs/foundation/foundation.magellan',
        'foundation.orbit':     'libs/foundation/foundation.orbit',
        'foundation.placeholder': 'libs/foundation/foundation.placeholder',
        'foundation.topbar':    'libs/foundation/foundation.topbar',
        'foundation.reveal':    'libs/foundation/foundation.reveal',
        'foundation.section':   'libs/foundation/foundation.section',
        'foundation.tooltips':  'libs/foundation/foundation.tooltips',
        'foundation.topbar':    'libs/foundation/foundation.topbar',
        modernizr:              'libs/modernizr/custom.modernizr'
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        jquery: {
            exports: 'jQuery'
        },
        foundation: {
            deps: ['jquery']
        },
        'foundation.alerts': {
            deps: ['foundation']
        },
        'foundation.clearing': {
            deps: ['foundation']
        },
        'foundation.cookie': {
            deps: ['foundation']
        },
        'foundation.dropdown': {
            deps: ['foundation']
        },
        'foundation.forms': {
            deps: ['foundation']
        },
        'foundation.joyride': {
            deps: ['foundation']
        },
        'foundation.magellan': {
            deps: ['foundation']
        },
        'foundation.orbit': {
            deps: ['foundation']
        },
        'foundation.placeholder': {
            deps: ['foundation']
        },
        'foundation.reveal': {
            deps: ['foundation']
        },
        'foundation.section': {
            deps: ['foundation']
        },
        'foundation.tooltips': {
            deps: ['foundation']
        },
        'foundation.topbar': {
            deps: ['foundation']
        }
    }

});

require([
    'app',
    'jquery',
    'modernizr',
    'foundation.alerts',
    'foundation.clearing',
    'foundation.cookie',
    'foundation.dropdown',
    'foundation.forms',
    'foundation.joyride',
    'foundation.magellan',
    'foundation.orbit',
    'foundation.placeholder',
    'foundation.topbar',
    'foundation.reveal',
    'foundation.section',
    'foundation.tooltips',
    'foundation.topbar'

], function(App, $){
    App.initialize();
    $(document).foundation();
});
