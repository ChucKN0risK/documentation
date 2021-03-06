---
last_modified_on: "2021-01-26"
title: "Applications"
description: "Learn how to configure your Application on Qovery"
---
import Jump from '@site/src/components/Jump';
import Alert from '@site/src/components/Alert';

An **application** is part of a project and is a container unit. Multiple applications can be part of the same [project][docs.using-qovery.configuration.projects], be connected to a set of dependencies (databases and other services), and can communicate with other applications within the same project.

To learn more about Application, read a high-level description of what Application concept means at Qovery.
<Jump to="/docs/main-concepts/project">Application</Jump>

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/using-qovery/configuration/applications.md.erb
-->

## Creating Application

Creating a new project is as simple as choosing its name in your application configs(`.qovery.yml`):

```yml {2}
application:
  name: myApp
  project: myProject
```

Above snippet creates an application `myApp` within the project `myProject`.

<Alert type="info">

Qovery creates the project if it does not exist. If the project exists, Qovery adds your application into it.

</Alert>

## Renaming Application

To give to your application a new name, just type `qovery application rename $NEW_NAME`, where `$NEW_NAME` is a placeholder for the new name you want to use.
After it's done, you need to update your `.qovery.yml` configuration file to match your new application name.

## configuration

1. The `.qovery.yml` file is mandatory to run your Application with Qovery.
2. The `Dockerfile` file is non-mandatory if your application is written in Ruby, Java, Node.JS, Python, Golang or PHP. More will be added. Suggest us to support a language [here][urls.qovery_roadmap]. If your language is not in the supported list, then you need to provide a `Dockerfile`.

### Application build

#### Option 1: Buildpacks

To simplify application build for the developer, Qovery supports [Buildpacks](https://buildpacks.io) out of the box. Buildpacks determine the build process for an app, and which assets and runtimes should be made available to your code at runtime. If your complex apps are running multiple languages, you can also use multiple buildpacks within a single app.
Meaning, as a developer, you don't need to write a `Dockerfile` to build and run your app. Qovery Buildpacks takes care of everything for you.

**Supported languages**

| language   | version |
|------------|---------|
| Ruby       | any     |
| Java       | any     |
| Node.JS    | any     |
| Python     | any     |
| Javascript | any     |
| Typescript | any     |
| Python     | any     |
| Golang     | any     |
| PHP        | any     |

You don't find a cool language? [Suggest us to support it][urls.qovery_roadmap]

#### Option 2: Dockerfile

Qovery runs your application within the [Container technology](https://www.docker.com/resources/what-container). To build and run your application, you need to provide a valid [Dockerfile](https://docs.docker.com/engine/reference/builder).

```Dockerfile title="Valid NodeJS Dockerfile"
FROM node:13-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD node ./bin/www
```

To validate it you can run `qovery run` - Note: you need to have Docker running on your computer.

#### Custom Dockerfile location

To specify the location of your Dockerfile, use `dockerfile` field in your `.qovery.yml`.

```yml {5}
application:
  name: myApp
  project: myProject
  cpu: 1
  dockerfile: my/folder/Dockerfile
```

Configuration from above will make Qovery look for the Dockerfile in `my/folder/Dockerfile` path of your repository.

### .qovery.yml

#### CPU

To configure the number of CPUs that your app needs, you only need to add the `cpu` option into the `.qovery.yml`

<Alert type="info">

Default is 256m

</Alert>

```yml {4}
application:
  name: myApp
  project: myProject
  cpu: 1
```

Accepted values are Integer and Millis CPU.

```yml {4} title="2 CPUs requested"
application:
  name: myApp
  project: myProject
  cpu: 2
```

```yml {4} title="1/4 of CPU requested"
application:
  name: myApp
  project: myProject
  cpu: 250m
```

#### RAM

To configure the number of CPUs that your app needs, you only need to add the `ram` option into the `.qovery.yml`

<Alert type="info">

Default is 512MB

</Alert>

```yml {4}
application:
  name: myApp
  project: myProject
  ram: 256MB
```

Accepted values are MB (mega bytes) and GB (giga bytes)

```yml {4} title="1 GB requested"
application:
  name: myApp
  project: myProject
  ram: 1GB
```

#### Publicly accessible

To publicly expose your application you need to add the following lines into your `.qovery.yml`

```yml {4-11} title="publicly expose my application and route the traffic into it"
application:
  name: myApp
  project: myProject
  publicly_accessible: true
  port: 8080
routers:
- name: my-router
  routes:
  - application_name: myApp
    paths:
    - /
```

*See what is a [router][docs.using-qovery.configuration.routing] to go further.*

You also need to indicate on which port your application is running.

**Option 1**

Add `port` property in your `.qovery.yml` as above.

**Option 2**

Add the `EXPOSE {port}` instruction into your `Dockerfile`

```Dockerfile title="Expose"
...
EXPOSE 3000
...
```

Your app is now publicly accessible through the auto generated endpoint.

#### Long startup time

Sometimes your application can take some time to start. E.g., when your app is performing database migration.
By default, Qovery waits for 15 seconds to check if your app is running correctly. If it's not the case, your environment is rolled-back to the previous working version.

To prevent this, you can change the startup time:

```yml {4} title="Change the start timeout to 5 minutes"
application:
  name: myApp
  project: myProject
  start_timeout: 600s
```

or

```yml {4} title="Change the start timeout to 5 minutes"
application:
  name: myApp
  project: myProject
  start_timeout: 5m
```

Seconds (s) and minutes (m) are accepted units.


#### Define start order

Qovery gives you the power to have multiple apps within one environment. Sometimes it's necessary to one or multiple apps before others.
By using `depends_on` property you can declare a list of apps your app is depending on.

Let's take as example 3 apps:

- billing-api
- user-api
- frontend

Where:
- **frontend** depends on **user-api** and **billing-api**.

```yml {4-6} title="Declare dependencies"
application:
  name: frontend
  project: myProject
  depends_on:
  - user-api
    billing-api
```

The `depends_on` property, guarantee that your app will never start before others that it depends on.


[docs.using-qovery.configuration.projects]: /docs/using-qovery/configuration/projects/
[docs.using-qovery.configuration.routing]: /docs/using-qovery/configuration/routing/
[urls.qovery_roadmap]: https://roadmap.qovery.com/
