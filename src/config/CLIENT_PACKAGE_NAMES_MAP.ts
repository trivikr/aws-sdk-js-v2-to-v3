import { CLIENT_NAMES } from "./CLIENT_NAMES";

export const CLIENT_PACKAGE_NAMES_MAP = {
  ...CLIENT_NAMES.reduce(
    (acc, name) => ({
      ...acc,
      [name]: `client-${name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`
    }),
    {}
  ),
  AugmentedAIRuntime: "SageMakerA2IRuntime",
  CUR: "CostAndUsageReportService",
  CodeArtifact: "Codeartifact",
  CodeStarNotifications: "CodestarNotifications",
  CodeStarconnections: "CodeStarConnections",
  CognitoIdentityServiceProvider: "CognitoIdentityProvider",
  DMS: "DatabaseMigrationService",
  Discovery: "ApplicationDiscoveryService",
  ELB: "ElasticLoadBalancing",
  ELBv2: "ElasticLoadBalancingV2",
  EMRcontainers: "EMRContainers",
  ES: "ElasticsearchService",
  Finspacedata: "FinspaceData",
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
