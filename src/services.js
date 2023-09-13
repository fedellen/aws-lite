/**
 * This list was manually generated by scraping `us-west-1` services from the AWS Service Endpoints and Quotas PDF (seriously): https://docs.aws.amazon.com/general/latest/gr/aws-general.pdf#aws-service-information
 * Probably we should write a scraper for the Service Endpoints and Quotas site, but it's finnicky
 * Previously we tried the `aws service-quotas list-services` command (which missed a LOT of basic things), as did the otherwise unreliable `aws describe-services` command. Sigh.
 */
// TODO: automate and improve this
// TODO: also, add support for `s3-website` endpoints, <prefix>.iot, <registry-id>.dkr.ecr[-fips], Route 53 ARC Recovery Cluster API
// TODO: add aliases (e.g. `dynamo` for `dynamodb`)

module.exports = [ 'access-analyzer', 'access-analyzer-fips', 'acm', 'acm-fips', 'acm-pca', 'acm-pca-fips', 'amplify', 'amplifybackend', 'amplifyuibuilder', 'aos', 'api-fips.sagemaker', 'api.detective', 'api.detective-fips', 'api.ecr', 'api.sagemaker', 'api.tunneling.iot', 'api.tunneling.iot-fips', 'apigateway', 'apigateway-fips', 'appconfig', 'appconfigdata', 'appflow', 'applicationinsights', 'appmesh', 'appmesh-fips', 'appsync', 'appwizard', 'arc-zonal-shift', 'athena', 'athena-fips', 'auditmanager', 'autoscaling', 'autoscaling-plans', 'backup', 'backup-fips', 'batch', 'braket', 'budgets', 'cassandra', 'cloud9', 'cloudcontrolapi', 'cloudcontrolapi-fips', 'cloudformation', 'cloudformation-fips', 'cloudfront', 'cloudfront-fips', 'cloudhsmv2', 'cloudsearch', 'cloudshell', 'cloudtrail', 'cloudtrail-fips', 'codebuild', 'codebuild-fips', 'codecommit', 'codecommit-fips', 'codedeploy', 'codedeploy-fips', 'codepipeline', 'codepipeline-fips', 'codestar', 'codestar-connections', 'codestar-notifications', 'cognito-identity', 'cognito-identity-fips', 'cognito-idp', 'cognito-idp-fips', 'compute-optimizer', 'config', 'config-fips', 'data-ats.iot', 'data.iot-fips', 'databrew', 'databrew-fips', 'dataexchange', 'datasync', 'datasync-fips', 'dax', 'devops-guru', 'devops-guru-fips', 'directconnect', 'directconnect-fips', 'dkr.ecr-fips', 'dlm', 'dms', 'dms-fips', 'drs', 'ds', 'ds-fips', 'dynamodb', 'dynamodb-fips', 'ebs', 'ebs-fips', 'ec2', 'ec2-fips', 'ec2-instance-connect', 'ecr', 'ecr-fips', 'ecs', 'ecs-fips', 'eks', 'elasticache', 'elasticache-fips', 'elasticbeanstalk', 'elasticfilesystem', 'elasticfilesystem-fips', 'elasticmapreduce', 'elasticmapreduce-fips', 'elastictranscoder', 'email', 'es', 'es-fips', 'events', 'events-fips', 'execute-api', 'fips.batch', 'fips.eks', 'fips.transcribe', 'firehose', 'firehose-fips', 'fis', 'fms', 'fms-fips', 'fsx', 'fsx-fips', 'gamelift', 'glacier', 'glacier-fips', 'globalaccelerator', 'glue', 'glue-fips', 'guardduty', 'guardduty-fips', 'iam', 'iam-fips', 'identitystore', 'imagebuilder', 'inspector', 'inspector-fips', 'inspector2', 'inspector2-fips', 'internetmonitor', 'internetmonitor-fips', 'iot', 'iot-fips', 'kafka', 'kafka-fips', 'kafkaconnect', 'kinesis', 'kinesis-fips', 'kinesisanalytics', 'kms', 'kms-fips', 'lakeformation', 'lakeformation-fips', 'lambda', 'lambda-fips', 'license-manager', 'license-manager-fips', 'logs', 'logs-fips', 'm2', 'm2-fips', 'macie2', 'macie2-fips', 'mediaconnect', 'mediaconvert', 'mediapackage', 'mediapackage-vod', 'mediapackagev2', 'memory-db', 'memory-db-fips', 'metering.marketplace', 'mgn', 'mgn-fips', 'monitoring', 'monitoring-fips', 'mq', 'mq-fips', 'network-firewall', 'network-firewall-fips', 'oam', 'opsworks', 'opsworks-cm', 'osis', 'outposts', 'outposts-fips', 'pi', 'pi-fips', 'pipes', 'polly', 'polly-fips', 'prefix.jobs.iot', 'quicksight', 'ram', 'ram-fips', 'rbin', 'rbin-fips', 'rds', 'rds-fips', 'redshift', 'redshift-data', 'redshift-fips', 'redshift-serverless', 'rekognition', 'rekognition-fips', 'resiliencehub', 'resource-groups', 'resource-groups-fips', 'rolesanywhere', 'route53', 'route53-recovery-control-config', 'route53-recovery-readiness', 'route53resolver', 'runtime.sagemaker', 's3', 's3-fips', 's3-outposts', 's3-outposts-fips', 's3.dualstack', 'savingsplans', 'scheduler', 'schemas', 'sdb', 'secretsmanager', 'secretsmanager-fips', 'securityhub', 'securityhub-fips', 'securitylake', 'serverlessrepo', 'servicecatalog', 'servicecatalog-fips', 'servicediscovery', 'servicediscovery-fips', 'servicequotas', 'signer', 'signer-fips', 'snowball', 'snowball-fips', 'sns', 'sqlworkbench', 'sqs', 'sqs-fips', 'ssm', 'ssm-fips', 'ssm-incidents', 'ssm-incidents-fips', 'ssm-sap', 'ssm-sap-fips', 'sso', 'stacksets', 'states', 'states-fips', 'storagegateway', 'storagegateway-fips', 'streams.dynamodb', 'sts', 'sts-fips', 'swf', 'swf-fips', 'sync-states', 'sync-states-fips', 'synthetics', 'synthetics-fips', 'tagging', 'textract', 'textract-fips', 'transcribe', 'transfer', 'transfer-fips', 'translate', 'verifiedpermissions', 'waf', 'waf-fips', 'waf-regional', 'waf-regional-fips', 'wafv2', 'wafv2-fips', 'wellarchitected', 'xray', 'xray-fips' ]
