---
last_modified_on: "2020-12-04"
title: MySQL
description: "How to set up and use a MySQL database"
---

import Alert from '@site/src/components/Alert';

MySQL is the world's most popular open source database. Whether you are a fast growing web property, technology ISV or large enterprise, MySQL can cost-effectively help you deliver high performance, scalable database applications. 

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/using-qovery/configuration/databases/mysql.md.erb
-->

## Add a MySQL database to your application

To add a dedicated MySQL instance to your existing application, simply add these lines to your configuration file:

```yml title=".qovery.yml" {4-6}
application:
...
databases:
- type: mysql
  version: 8.0
  name: my-mysql
```

- name: select a name for your database
- version: choose the version of the database
- type: the database engine (mysql in this case)

Alternatively, if you are creating a new application, use `qovery init` to interactively add a database (the CLI asks if you need one).

## Supported versions

Here are the MySQL versions supported by Qovery.

|Version|Supported|
|---------|-------|
|8.0|Yes|
|5.7|Yes|
|5.6|Yes|
|5.5|Yes|


Qovery does not support a new version of MySQL yet? [Contact us][urls.qovery_chat]

## Get access to your MySQL database

To get the connection information of your database, you can use the CLI:

```bash
qovery application env list -c
```

```plain title="OUTPUT"
$ qovery application env list -c
  SCOPE       | KEY                                                           | VALUE
--------------+---------------------------------------------------------------+-----------
  BUILT_IN    | QOVERY_BRANCH_NAME                                            | master
  BUILT_IN    | QOVERY_IS_PRODUCTION                                          | true
  BUILT_IN    | QOVERY_DATABASE_MY_MYSQL_NAME                               | my-mysql
  BUILT_IN    | QOVERY_DATABASE_MY_MYSQL_TYPE                               | mysql
  BUILT_IN    | QOVERY_DATABASE_MY_MYSQL_VERSION                            | 8.0
  BUILT_IN    | QOVERY_DATABASE_MY_MYSQL_CONNECTION_URI                     | <hidden>
  BUILT_IN    | QOVERY_DATABASE_MY_MYSQL_CONNECTION_URI_WITHOUT_CREDENTIALS | <hidden>
  BUILT_IN    | QOVERY_DATABASE_MY_MYSQL_HOST                               | <hidden>
  BUILT_IN    | QOVERY_DATABASE_MY_MYSQL_FQDN                               | <hidden>
  BUILT_IN    | QOVERY_DATABASE_MY_MYSQL_PORT                               | <hidden>
  BUILT_IN    | QOVERY_DATABASE_MY_MYSQL_USERNAME                           | <hidden>
  BUILT_IN    | QOVERY_DATABASE_MY_MYSQL_PASSWORD                           | <hidden>
  BUILT_IN    | QOVERY_DATABASE_MY_MYSQL_DATABASE                           | mysql
```

In the output, you get all data you need to use the database. Those environment variables are available in the runtime of your application.

## Show MySQL database status

To know more about your database status, run:

```bash
qovery status -c
```

```plain title="OUTPUT"
DATABASE NAME | STATUS  | TYPE    | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS
----------------+---------+---------+---------+----------+----------+----------+----------+-----------------
  my-mongo      | running | mysql | 8.0     | <hidden> | <hidden> | <hidden> | <hidden> | simple-example
```

## Delete your MySQL database

To delete a database, you have to:
- Remove it from the configuration file, commit and push.
- Delete it manually (for security purpose) through the [Qovery web interface][urls.start_qovery].

<Alert type="danger">

Delete action drops the service and its data!

</Alert>

<Alert type="info">

Backups from production environments are kept for 1 month if you need to recover.

</Alert>

## MySQL backup

Daily backups for your MySQL database are automatically done for [Production environments][docs.using-qovery.configuration.business.policy#environment-mode].


[docs.using-qovery.configuration.business.policy#environment-mode]: /docs/using-qovery/configuration/business/policy/#environment-mode
[urls.qovery_chat]: https://discord.qovery.com
[urls.start_qovery]: https://start.qovery.com
