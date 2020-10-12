---
last_modified_on: "2020-10-09"
title: "Amazon Web Services (AWS)"
description: "Learn how to configure and plug your Amazon Web Services (AWS) account"
---
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';

Qovery lets you quickly deploy applications to your [Amazon Web Services (AWS)][urls.aws] account. No knowledge is needed, and it takes less than 20 minutes to install Qovery on your AWS account.

<Alert type="info">

Do you want to know more about how Qovery works on your AWS account? [Here][docs.useful-links.faq#how-qovery-works-under-the-hood] is explained how Qovery works under the hood.

</Alert>

<!--
SCHEMA: Show a schema where Qovery is deployed on the account of the customer
-->

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/using-qovery/configuration/business/cloud-account/amazon-web-services.md.erb
-->

## Getting started

<Assumptions>

* You have a [Qovery][docs.using-qovery.interface] account
* You have created an [Organization][docs.using-qovery.configuration.business.organization]

</Assumptions>

### Link your AWS account

TODO

<Alert type="info">

You can link more than one AWS account. Qovery also support multiple Cloud providers within the same Organization. Which means that you can balance your workload on different Cloud providers. [Read more][].

</Alert>

#### Required IAM permissions

Qovery required IAM permissions to work. Get the list of permissions <a href="/files/qovery-iam-aws.json">here</a>.

### Remove your AWS account

TODO

## Best practices

TODO

## Regions

Qovery supports the following AWS regions:

| | name             | description                   | supported |
|-|------------------|-------------------------------|-----------|
|🇺🇸| aws/us-west-2      | US West (Oregon)            | yes       |
|🇺🇸| aws/us-east-2      | US East (Ohio)              | yes       |
|🇺🇸| aws/us-east-1      | US East (N. Virginia)      |  yes       |
|🇺🇸| aws/us-west-1      | US West (N. California)    |  yes       |
|🇿🇦| aws/af-south-1     | Africa (Cape Town)          | yes       |
|🇭🇰| aws/ap-east-1      | Asia Pacific (Hong Kong)    | yes       |
|🇮🇳| aws/ap-south-1     | Asia Pacific (Mumbai)       | yes       |
|🇯🇵| aws/ap-northeast-1 | Asia Pacific (Tokyo)        | yes       |
|🇰🇷| aws/ap-northeast-2 | Asia Pacific (Seoul)        | yes       |
|🇯🇵| aws/ap-northeast-3 | Asia Pacific (Osaka) |  yes       |
|🇸🇬| aws/ap-southeast-1 | Asia Pacific (Singapore)    | yes       |
|🇦🇺| aws/ap-southeast-2 | Asia Pacific (Sydney)       | yes       |
|🇨🇦| aws/ca-central-1   | Canada (Central)            | yes       |
|🇩🇪| aws/eu-central-1   | Europe (Frankfurt)          | yes       |
|🇮🇪| aws/eu-west-1      | Europe (Ireland)            | yes       |
|🏴󠁧󠁢󠁥󠁮󠁧󠁿| aws/eu-west-2      | Europe (London)             | yes       |
|🇫🇷| aws/eu-west-3      | Europe (Paris)             | yes       |
|🇮🇹| aws/eu-south-1     | Europe (Milan)              | yes       |
|🇸🇪| aws/eu-north-1     | Europe (Stockholm)          | yes       |
|🇧🇭| aws/me-south-1     | Middle East (Bahrain)       | yes       |
|🇧🇷| aws/sa-east-1      | South America (São Paulo)   | yes       |

## Kubernetes

TODO

## FAQ

### How to choose a region?

Different datacenters are located in different geographic areas, and you may want to keep your site physically close to the bulk of your user base for reduced latency.

### I don't find a region that is provided by AWS

We are probably testing the support of this region, please [contact us][urls.qovery_contact_us] to know what's the status

### Migrate between Cloud providers and regions

Today, you can't migrate an environment from one region to another after it has been created. Vote [here][urls.qovery_roadmap] if you need this feature.


[docs.useful-links.faq#how-qovery-works-under-the-hood]: /docs/useful-links/faq/#how-qovery-works-under-the-hood
[docs.using-qovery.configuration.business.organization]: /docs/using-qovery/configuration/business/organization/
[docs.using-qovery.interface]: /docs/using-qovery/interface/
[urls.aws]: https://aws.amazon.com
[urls.qovery_contact_us]: https://www.qovery.com/contact
[urls.qovery_roadmap]: https://roadmap.qovery.com/