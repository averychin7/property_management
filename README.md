# property_management

Property Management software

This repo consist the front and backend of the app

- client: Vite/React
- server: Node/Express
  - database: Drizzle/PostgreSQL

### Pre-requisite

- Node v22

### File and Folder structure in server

This application is using colocation structure

```
├── api
│   ├── [featureName]
│   |   ├── [featureName].routes.ts         // all the different routes belongs to the
│   |   ├── [featureName].controller.ts     // Orchestration ( get request from routes and assigned to different services)
│   |   ├── [featureName].service.ts        // all the buisness logic
feature
│   |   ├── [featureName].helpers.ts        // helper function belongs to the feature
│   |   ├── [featureName].middleware.ts     // middleware that belongs to the feature (i.e. validation)
│   │   ├── [featureName].type.ts           // all the types used in the feature
│   │   ├── {subFeatureName}                // same module naming process as parent feature
├── middleware                              // general middlware (i.e auth)
├── utils                                   // general utills functions
├── tests
├── database
│   ├── schema                              // all the model from database
│   ├── index.js
│   ├── migration
├── index.ts
└──
```

### How to launch the app
