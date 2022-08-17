/* eslint-disable import/prefer-default-export */
// export const API_ENDPOINT = 'http://192.168.0.48:8084';
// export const API_ENDPOINT = 'http://10.65.4.39/api';
import {
  API_URL,
  API_URL_DATA_SEARCH,
  API_URL_ELASTIC_QUERY_BUILDER,
  API_URL_DATA_SOURCE,
  API_URL_DATA_SINK,
  API_DATA_MODEL,
  API_URL_DATA_SOURCE_CSV_UPLOAD,
  API_URL_DATA_SINK_CDP,
  API_URL_DASHBAORD_QUICKSHITE,
  API_URL_PLATFORM,
} from './domainConstants';
export const API_ADD_CENTER =  `${API_URL_DATA_SEARCH}/tele/api/add_node`;
export const API_LIST_CENTER =  `${API_URL_DATA_SEARCH}/tele/api/list_node/`;
export const API_LIST_ASSIGN =  `${API_URL_DATA_SEARCH}/tele/api/get_request`;
export const API_DELETE_NODE = `${API_URL_DATA_SEARCH}/tele/api/delete_node`
export const LOGIN_API_ENDPOINT = `${API_URL_PLATFORM}/api/v2/login`;
export const PERMISSION_API_ENDPOINT = `${API_URL_PLATFORM}/api/v2/perms`;

export const PROJECT_STATS_ENDPOINT = `${API_URL_PLATFORM}/api/v1/project_stats`;
export const ALGO_STATS_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/algostats`
export const LINECHART_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/lineChart`;
export const BARCHART_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/barChart`;
export const LINECHART_ALGO_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/chartalgo`;
export const COMPANY_DATA_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/companyData`
export const ALGO_DATA_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/algoData`
export const USER_LIST_PLATFORM_ENDPOINT = `${API_URL_PLATFORM}/api/v1/user_list`
export const USER_LOGS_ENDPOINT = `${API_URL_PLATFORM}/api/v1/user_logs`


export const CREATE_DATASET_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/create_dataset`;
export const GET_DATASETLIST_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/datasets`;
export const DELETE_DATASET_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/datasets/delete_dataset`;
export const UPLOAD_DATASET_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/upload`;
export const SHARE_DATASET_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/datasets/share_dataset`;
export const DELETE_STUDY_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/delete_studies`;
export const ANONYMIZE_STUDY_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/anonymize_studies`;
export const DOWNLOAD_STUDY_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/datasets/download_study`;
export const DOWNLOAD_HISTORY_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/datasets/download_history`;
export const ADD_REPORT_STUDY_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/datasets/update_single_report`;
export const SHARE_STUDY_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/datasets/share_study`;

export const SHOW_DATAMINER_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/dataminer`;
export const GET_COLLECTION_INFO_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/dataminer/collection`;
export const COLLECTION_COLUMN_LIST_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/dataminer/columns_list`;
export const COLLECTION_SEARCH_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/dataminer/search`;
export const COLLECTION_COUNT_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/dataminer/count`;
export const ADD_COLLECTION_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/dataminer/add_report`;

export const GET_ANNOTATIONLIST_ENDPOINT = `${API_URL_DATA_SEARCH}/api/v1/annotation_projects`;

export const API_ENDPOINT = `${API_URL}/ZAP1/core/api/v1`;
export const API_ENDPOINT_ELASTIC_QUERYBUILDER = `${API_URL_ELASTIC_QUERY_BUILDER}/ZAP1/elastic/api/v1/`;
export const PAGE_SIZE = 20;
export const DASHLET_PAGE_SIZE = 21;
export const MODEL_PAGE_SIZE = 5;
export const API_ENDPOINT_ANALYSIS = `${API_URL}/ZAP1/core/api/v1`;
export const IMAGE_URL = `${API_URL}/`;
export const LOGIN_URL = '/login';
export const CREATE_USER_URL = '/createUser';
export const LIST_USER = '/listUser';
export const CREATE_GROUP_URL = '/createUserGroup';
export const CREATE_ROLE_URL = '/createRole';
export const ROLE_LIST_URL = '/listUserRole';
export const GROUP_LIST_URL = '/listUserGroup';
export const COUNT_USER_PER_GROUP = '/countUserPerGroup';
export const ROLE_LIST_BY_GROUP_ID_URL = '/listUserRoleByGroupId';
export const EDIT_USER_URL = '/editUser';
export const EDIT_GROUP_URL = '/editUserGroup';
export const EDIT_ROLE_URL = '/editUserRole';
export const EDIT_ANALYSIS_ROLE_URL = '/editUserRole';
export const FORGOT_RESET_PASSWORD_URL = '/resetPasswordRequest';
export const VERIFY_RESET_PASSWORD_TOKEN = '/verifyResetPasswordToken';
export const RESET_PASSWOD_URL = '/resetPassword';
export const CHANGE_PASSWORD_URL = '/changePassword';
export const ANALYSIS_ATTRIBUTE_LIST_URL = '/getAllAttributes';
export const CONFIGURATION_ATTRIBUTE_LIST_URL =
  '/configuration/fetchAllAttributes';
export const CONFIGURATION_ATTRIBUTE_LIST_PAGINATION_URL =
  '/configuration/fetchAllAttributes/pagination?';
export const CREATE_ENTITIY = '/createEntity';
export const EDIT_ENTITIY = '/editEntity';
export const CREATE_FIELD = '/createField';
export const EDIT_FIELD = '/editField';
export const LIST_ALL_ENTITIES = '/listAllEntity';
export const LIST_FIELDS = '/listAllField';
export const FIELD_BY_ENTITY_ID = '/getFieldByEntity';
export const FIELD_BY_ENTITY_ID_PAGINATION = '/getFieldByEntity/pagination?';
export const EDIT_ATTRIBUTE_ALIAS_NAME = '/editAttribute';
export const GET_CATEGORY_TYPE = '/config/get/categoryType';

export const API_ENDPOINT_SEGMENT = `${API_URL}/ZAP1/core/api/v1`;
export const LIST_SEGMENTS = '/listSegmentInfo';
export const LIST_SEGMENTS_PAGINATION = '/listSegmentInfo/pagination?';
export const CREATE_SEGMENT = '/storesSegmentData';
export const UPDATE_SEGMENT = '/updateSegmentData';
export const FETCH_SEGMENT_BY_ID = '/fetchSegmentData';
export const FETCH_ATTRIBUTE_BY_ENTITY_FIELD = '/getAnalysisAttributes';
export const FETCH_NODE_OPTIONS_BY_PATH = '/aggs/distinct/';
export const FETCH_NODE_OPTIONS_CUSTOMER_360 = '/aggs/distinct/attribute/';
export const FETCH_NODE_OPTIONS_BY_PATH_IMPALA = '/aggs/distinct/impala?';
export const FETCH_SEARCH_CUSTOMER_OPTIONS =
  '/analysis/360/search/fields/entity/categoryName/Search';
export const GET_TAG_LIST = '/config/get/groupTag';
export const POST_NODE_COUNT = '/download';
export const LIST_SEGMENTSSINGLENODE_PAGINATION = '/download/getlist?';

export const API_ENDPOINT_DRIVED = `${API_URL}/ZAP1/core/api/v1`;
export const CREATE_DRIVED_ATTRIBUTE = '/config/createDerivedAttribute';
export const GET_DERIVED_ATTRIBUTE = '/config/get/derivedAttribute';
export const EDIT_DERIVED_ATTRIBUTE_URL = '/config/edit/derivedAttribute/';
export const GET_DERIVED_ATTRIBUTE_PAGINATION =
  '/config/get/derivedAttribute/pagination?';
// Customer 360;
export const API_ENDPOINT_CUSTOMER_360 = `${API_URL}/ZAP1/core/api/v1/360`;
export const API_GET_CATEGORY_NAME_SEARCH =
  '/search/fields/entity/categoryName/search';
export const API_GET_CATEGORY_NAME_REGULAR =
  '/search/fields/entity/categoryName/regular';
export const FETCH_SEARCH_BY_TYPE_CUSTOMER = '/search/pi/attribute/';
export const API_ENDPOINT_CUSTOMER_360_CONFIG = `${API_URL}/ZAP1/core/api/v1/360Config`;
export const FETCH_CUSTOMER_BY_DOCID = '/search/allCategory/attribute';
export const FETCH_ENTITY_LIST_BY_CATEGORY_NAME = '/entityByCategory';
export const API_ENDPOINT_QUERY_COUNT = `${API_URL}/ZAP1/elastic/api/v1`;
export const QUERY_COUNT = '/count';
export const tempUrl = `${API_URL_ELASTIC_QUERY_BUILDER}/ZAP1/elastic/api/v1`;
export const QUERY_ASYNC_COUNT = '/asyncCount';
export const QUERY_REQUESTID_COUNT = '/count';

export const FIELD_FILTER_APPLY = '/360/rules';
export const FIELD_FILTER_GET = '/360/getRules';
export const FIELD_FILTER_APPLY_360 = '/360Config/rules';
export const FIELD_FILTER_GET_360 = '/360Config/getRules';

export const API_ENDPOINT_TEMPLATE = `${API_URL}/ZAP1/core/api/v1`;
export const CREATE_TEMPLATE_URL = '/template/create';
export const EDIT_TEMPLATE_URL = '';
export const TEMPLATE_LIST_URL = '/template/list?';
export const TEMPLATE_TYPE_URL = '/template/distinct/type';
export const TEMPLATE_CATEGORY_URL = '/template/distinct/category';

export const API_ENDPOINT_DASHBOARD = `${API_URL}/ZAP1/core/api/v1`;
export const DASHBOARDLAYOUT_LIST_URL = '/listDashboardInfo/pagination?';
export const CREATE_DASHBOARDLAYOUT_URL = '/storesDashboardAndDashletData';
export const UPDATE_DASHBOARDLAYOUT_URL = '/updateDashboardAndDashletData';
export const EDIT_DASHBOARDLAYOUT_URL = '/fetchDashboardData';

export const API_ENDPOINT_DASHLET = `${API_URL}/ZAP1/core/api/v1`;
export const DASHLET_LIST_URL = '/getDashletsByDashboardId/{id}';
export const SAVE_DASHLET_URL = '/storesDashletsDataByDashboardId';
export const DASHBOARD_COUNT_DATA = '/getDashletAggregation/parallelStream';
export const DASHLET_TYPE_LIST = '/get/dashlets/type';
export const API_ENDPOINT_CUSTOME_VIEW_360 = `${API_URL}/ZAP1/core/api/v1/360`;
export const FETCH_CUSTOMER360_OBJECT = '/search/category';
export const FETCH_CUSTOMER360CONFIG_OBJECT = '/view/category';

// export const API_ENDPOINT_WORKFLOW = `http://172.16.16.234:8084/`;
export const API_ENDPOINT_WORKFLOW = `http://localhost:8084/`;

export const CREATE_CAPAIGN = '/storesWorkflowData';
export const FETCH_WORKFLOW_BY_ID = '/fetchWorkflowData';
export const LIST_WORKFLOW_PAGINATION = 'api/v1/list';
export const UPDATE_WORKFLOW = '/updateWorkflowData';
export const WORKFLOWSEGMENTS_PAGE_SIZE = 99999999;

export const API_ENDPOINT_DATASOURCE = `${API_URL_DATA_SOURCE}/dataSource`; // for data source csv ;
export const API_ENDPOINT_DATASOURCE_UPLOAD = `${API_URL_DATA_SOURCE_CSV_UPLOAD}/dataSource`; // for data source csv ;
export const GET_DATA_SOURCE_LIST = '/listConfig';
export const KAFKA_FIRST_STEPS = '/checkConnectivityAndGetTopicList';
export const KAFKA_SECOND_STEPS = '/fetchSchema';
export const DATASOURCE_TAGLIST_URL = '/listTag';
export const CSV_DATA_SOURCE_STORE_URL = '/upload ';
export const EDIT_DATASOURCE = '/editConfig';
export const KAFKA_THIRD_STEPS = '/configSaved';
export const LIST_CONFIG = '/listConfig?';
export const GET_BY_ID = '/fetchAllDetailsById';
export const CSV_SECOND_STEPS_URL = '/triggerJob';

export const HIVE_GET_SOURCE_LIST = '/getListOfNameSpace';
export const HIVE_GET_TABLE_LIST = '/getListTables';
export const HIVE_GET_TABLE_STRUCTURE = '/getTableStructure';

export const API_ENDPOINT_SEARCH=`${API_URL_DATA_SEARCH}/tele/api/search/`;

export const API_ENDPOINT_DATASINKS = `${API_URL_DATA_SINK}/dataSink`;
export const SAVE_DATA_SINKS_URL = '/configSaved';
export const DATASINK_TAG_URL = '/listTag';
export const DATA_SINK_LIST = '/listConfig/pagination?';
export const DATA_SINK_GET_BY_ID = '/fetchAllDetailsById';
export const NETCORE_TEST_SMS_URL = '/netcoreSms';
export const DATA_SINK_LIST_CONFIG = '/listConfig';
export const TAGS_SMS = '/workflowTags/listTag';
export const TAG_WORKFLOW_CREATE = '/createWorkflowTag';
export const FETCH_DATA_SENDER_ID_CHANNEL = '/getSenderInfoById';
export const BLACK_LIST_CREATE_UPDATE = '/blackList/create/update';
export const BLACK_LIST_FETCH_DETAILS = '/blackList/fetchDetailsById';
export const BLACK_LIST_DATA_LIST = '/blackList/listConfig/pagination?';
// WP Means Without Pagination
// WP Means Without Pagination
export const API_DATASOURCE_LIST_WP = '/listConfig/withoutPagination';
export const API_ENDPOINT_DATAMODEL = `${API_DATA_MODEL}/dataModel`;
export const API_DATAMODEL_LIST_WP = '/list';
export const DATA_MODEL_TABLE_API = '/fetchDetailsByID';
export const DATA_SOURCE_TABLE_API = '/fetchDataSourceNameList';
export const API_SEGMENTTAG_LIST = '/listSegmentsTag';
export const MSG91_TEST_SMS_URL = '/msg91sms';
export const SMS6_TEST_SMS_URL = '/sms6';
export const MAILKOOT_TEST_SMS_URL = '/mailkoot';
export const FETCH_NODE_OPTIONS_BY_PATH_IMPALA_POST =
  '/aggs/distinct/impala/post';
export const GET_PI_FIELDS = '/getFieldByEntity/Pi/PI';
export const FETCH_CUSTOMER_PERSONAL = '/view/category/';
export const DISTINCT_QUERY_SIZE = 100;
export const PUBLISHED_SEGMENT = '/listPublishedSegment';
export const GET_WORKFLOW_PREVIEW_DATA = '/fetchJourneyByJourneyId?';
export const GET_DATA_SOURCE_SYSTEM_ATTRIBUTE =
  '/getSystemAttributeById?serviceId=';

export const CREATE_UPDATE_FREQUENCY = '/frequencyCapping/create/update';
export const FETCH_FREQUENCY_DETAILS = '/frequencyCapping/fetchDetailsById';
export const FREQUENCY_LIST = '/frequencyCapping/listConfig/pagination?';

export const GET_SYSTEM_ATTRIBUTE_LIST =
  '/systemAttribute/listConfig/pagination';
export const FETCH_SYSTEM_ATTRIBUTE_DETAILS =
  '/systemAttribute/fetchDetailsById';
export const CREATE_UPDATE_SYSTEM_ATTRIBUTE = '/systemAttribute/create/update';
export const GET_SYSTEM_ATTRIBUTE_LIST_WP = '/systemAttribute/listConfig';
export const UPDATE_IS_ID_SYSTEM_ATTRIBUTE = '/systemAttribute/updateIsId';
export const GET_ISID_SYSTEMATTRIBUTE =
  '/systemAttribute/activeIsIdSystemAttribute';
export const GET_REQUEST_ID_BEFORE_COUNT_WORKFLOW = '/fetchCount';
export const GET_COUNT_BY_REQUEST_ID_WORKFLOW = '/fetchCountById?';

export const KARIX_TEST_SMS_URL = '/karix';
export const DASHBAORD_LIST_URL = '/getActivePublish/dashboardIds';
export const VALUELEAF_TEST_SMS_URL = '/valueLeafSms';
export const DATA_SOURCE_GET_REQUEST_ID = '/uploadPercentage?';
export const DATA_SOURCE_NAME_VALIDATE = '/validate/dataSourceName';

export const SYSTEM_ATTRIBUTE_TAG_LIST_URL = `${API_URL_DATA_SINK_CDP}/dataSink`;
export const API_END_POINT_DATASOURCE = `${API_URL_DATA_SINK_CDP}/dataSource`;
export const VALIDATION_TAGS_URL = '/systemAttribute/tagList';
export const API_END_POINT_QUICK_SHITE = `${API_URL_DASHBAORD_QUICKSHITE}/ZAPQICK/api/v1/elasticQueryBuilder`;
export const QUICK_DASHBAORD_GET_URL = '/quickSightDashboardURLServices';
export const SHIVTEL_TEST_SMS_URL = '/shivtel';
export const AKINFO_TEST_SMS_URL = '/akInfoTech';
export const INFOBIP_TEST_SMS_URL = '/infobip';

export const API_LOGOUT_URL = `${API_URL}`;
export const LOGOUT_URL = '/logout';
export const COPY_WORKFLOW_URL = "/fetch/workflow/copy"

