export enum EReduxActionTypes {

    SET_CURRENT_USERS_STARTED = 'currentUser/setCurrentUser_STARTED',
    SET_CURRENT_USERS_DONE = 'currentUser/setCurrentUser_DONE',
    SET_CURRENT_USERS_ERROR = 'currentUser/setCurrentUser_ERROR',
    SET_CURRENT_USERS_STORE = 'currentUser/setCurrentUserStore',


    FETCH_TESTS_INFO_STARTED = 'testInfo/fetchTestsInfo_STARTED',
    FETCH_TESTS_INFO_DONE = 'testInfo/fetchTestsInfo_DONE',
    FETCH_TESTS_INFO_ERROR = 'testInfo/fetchTestsInfo_ERROR',

    FETCH_TESTS_DATA_STARTED = 'testData/fetchTestsData_STARTED',
    FETCH_TESTS_DATA_DONE = 'testData/fetchTestsData_DONE',
    FETCH_TESTS_DATA_ERROR = 'testData/fetchTestsData_ERROR',

    FETCH_TESTS_RESULT_STARTED = 'testResult/fetchTestsResult_STARTED',
    FETCH_TESTS_RESULT_DONE = 'testResult/fetchTestsResult_DONE',
    FETCH_TESTS_RESULT_ERROR = 'testResult/fetchTestsResult_ERROR',

    FETCH_USERS_STARTED = 'user/fetchUser_STARTED',
    FETCH_USERS_DONE = 'user/fetchUser_DONE',
    FETCH_USERS_ERROR = 'user/fetchUser_ERROR',

    FETCH_RATING_STARTED = 'rating/fetchRating_STARTED',
    FETCH_RATING_DONE = 'rating/fetchRating_DONE',
    FETCH_RATING_ERROR = 'rating/fetchRating_ERROR',

    FETCH_CATEGORIES_STARTED = 'categories/fetchCategoriest_STARTED',
    FETCH_CATEGORIES_DONE = 'categories/fetchCategoriest_DONE',
    FETCH_CATEGORIES_ERROR = 'categories/fetchCategoriest_ERROR',
    SET_CATEGORIES_STORE = 'categories/setCategoriesStore',


}

//Если смысл разделять?
export enum EReduxActionTypesAdmin {
    IS_AUTHENTICATED = 'Auth/IS_AUTHENTICATED',
    IS_USER_ADMIN = 'Auth/isUserAdmin',

    OPEN_DRAWER = 'App/openDrawer',

    FETCH_TESTS_INFO_STARTED = 'testInfoAdmin/fetchTestsInfo_STARTED',
    FETCH_TESTS_INFO_DONE = 'testInfo/fetchTestsInfo_DONE',
    FETCH_TESTS_INFO_ERROR = 'testInfo/fetchTestsInfo_ERROR',

    CREATE_TESTS_INFO_STARTED = 'testInfo/createTestsInfo_STARTED',
    CREATE_TESTS_INFO__DONE = 'testInfo/createTestsInfo_DONE',
    CREATE_TESTS_INFO__ERROR = 'testInfo/createTestsInfo_ERROR',

    EDIT_TESTS_INFO__STARTED = 'testInfo/editTestsInfo_STARTED',
    EDIT_TESTS_INFO__DONE = 'testInfo/editTestsInfo_DONE',
    EDIT_TESTS_INFO__ERROR = 'testInfo/editTestsInfo_ERROR',

    REMOVE_TESTS_INFO__STARTED = 'testInfo/removeTestsInfo_STARTED',
    REMOVE_TESTS_INFO__DONE = 'testInfo/removeTestsInfo_DONE',
    REMOVE_TESTS_INFO__ERROR = 'testInfo/removeTestsInfo_ERROR',


}
