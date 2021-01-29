// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authMgmtService: {
    protocol: 'http',
    port: 9000,
    apiPrefix: '/api/auth',
    loginUser: '/v1/login'
  },
  projectMgmtService: {
    protocol: 'http',
    port: 9000,
    apiPrefix: '/api/project',
    addNewProject: '/v1',
    projectList: '/v1',
    removeProject: '/v1/:id',
    updateProject: '/v1/:id',
    getProject: '/v1/:id'
  },
  employeeMgmtService: {
    protocol: 'http',
    port: 9000,
    apiPrefix: '/api/employee',
    addNewEmployee: '/v1',
    employeeList: '/v1',
    removeEmployee: '/v1/:id',
    updateEmployee: '/v1/:id',
    getEmployee: '/v1/:id'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
