import { CLIENT_NAMES } from "./CLIENT_NAMES";

export const CLIENT_PACKAGE_NAMES_MAP = {
  ...CLIENT_NAMES.reduce(
    (acc, name) => ({
      ...acc,
      [name]: `client-${name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`
        .replace("-amplify-", "-amplify")
        .replace("-cloud-", "-cloud")
        .replace("-chime-sdk", "-chime-sdk-")
        .replace("-code-", "-code")
        .replace("client-data-", "client-data")
    }),
    {}
  ),
  AccessAnalyzer: "client-accessanalyzer",
  ACMPCA: "client-acm-pca",
  APIGateway: "client-api-gateway",
  ApiGatewayManagementApi: "client-apigatewaymanagementapi",
  ApiGatewayV2: "client-apigatewayv2",
  AppConfig: "client-appconfig",
  AppConfigData: "client-appconfigdata",
  AppIntegrations: "client-appintegrations",
  AppRunner: "client-apprunner",
  AppStream: "client-appstream",
  AppSync: "client-appsync",
  ApplicationCostProfiler: "client-applicationcostprofiler",
  AugmentedAIRuntime: "client-sage-maker-a2iruntime",
  AuditManager: "client-auditmanager",
  CUR: "client-cost-and-usage-report-service",
  CloudHSMV2: "client-cloudhsm-v2",
  CodeGuruProfiler: "client-codeguruprofiler",
  CodeStarconnections: "client-codestar-connections",
  CognitoIdentityServiceProvider: "client-cognito-identity-provider",
  ComprehendMedical: "client-comprehendmedical",
  ConnectParticipant: "client-connectparticipant",
  DMS: "client-database-migration-service",
  DataPipeline: "client-data-pipeline",
  Discovery: "client-application-discovery-service",
  DevOpsGuru: "client-devops-guru",
  DynamoDB: "client-dynamodb",
  DynamoDBStreams: "client-dynamodb-streams",
  DocDB: "client-docdb",
  EC2InstanceConnect: "client-ec2-instance-connect",
  ECRPUBLIC: "client-ecr-public",
  ELB: "client-elastic-load-balancing",
  ELBv2: "client-elastic-load-balancing-v2",
  ElastiCache: "client-elasticache",
  EMRcontainers: "client-emr-containers",
  ES: "client-elasticsearch-service",
  EventBridge: "client-eventbridge",
  Finspacedata: "client-finspace-data",
  ForecastQueryService: "Forecastquery",
  ForecastService: "Forecast",
  IVS: "Ivs",
  IdentityStore: "Identitystore",
  Iot: "IoT",
  IotData: "IoTDataPlane",
  KinesisVideoSignalingChannels: "KinesisVideoSignaling",
  LexRuntime: "LexRuntimeService",
  MQ: "Mq",
  RDSDataService: "RDSData",
  SESV2: "SESv2",
  SavingsPlans: "Savingsplans",
  StepFunctions: "SFN",
  TranscribeService: "Transcribe"
};
