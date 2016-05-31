// Configure Toastr
toastr.options.timeOut = 4000;
toastr.options.positionClass = 'toast-bottom-right';

// For use with the HotTowel-Angular-Breeze add-on that uses Breeze
var remoteServiceName = 'breeze/Breeze';

var events = {
    controllerActivateSuccess: 'controller.activateSuccess',
    spinnerToggle: 'spinner.toggle'
};

var config = {
    appErrorPrefix: '[App Error] ', //Configure the exceptionHandler decorator
    docTitle: 'Error: ',
    events: events,
    remoteServiceName: remoteServiceName,
    version: '2.1.0'
};

angular.module('app').value('config', config)
    .config(['$logProvider', function ($logProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }])

    //#region Configure the common services via commonConfig
    .config(['commonConfigProvider', function (cfg) {
        cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
        cfg.config.spinnerToggleEvent = config.events.spinnerToggle;
    }])

    .config(['$mdIconProvider', function ($mdIconProvider) {

    }])

    .config(['dashboardProvider', function (dashboardProvider) {
        dashboardProvider.structure('6-6', {
            rows: [{
                columns: [{
                    styleClass: 'col-md-6'
                }, {
                        styleClass: 'col-md-6'
                    }]
            }]
        });
    }])

    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    }]);
