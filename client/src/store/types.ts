export enum EReduxActionTypes {

    OPEN_DRAWER = 'app/openDrawer',

    SET_CURRENT_USERS_STARTED = 'currentUser/setCurrentUser_STARTED',
    SET_CURRENT_USERS_DONE = 'currentUser/setCurrentUser_DONE',
    SET_CURRENT_USERS_ERROR = 'currentUser/setCurrentUser_ERROR',
    SET_CURRENT_USERS_STORE = 'currentUser/setCurrentUserStore',
    SET_CURRENT_USERS_ANSWER_TEST_STORE = 'currentUser/setCurrentUserAnswersTestStore',

    UPLOAD_AVATAR_CURRENT_USERS_STARTED = 'currentUser/uploadUserAvatar_STARTED',
    UPLOAD_AVATAR_CURRENT_USERS_DONE = 'currentUser/uploadUserAvatar_DONE',
    UPLOAD_AVATAR_CURRENT_USERS_ERROR = 'currentUser/uploadUserAvatar_ERROR',

    FETCH_TESTS_INFO_STARTED = 'testInfo/fetchTestsInfo_STARTED',
    FETCH_TESTS_INFO_DONE = 'testInfo/fetchTestsInfo_DONE',
    FETCH_TESTS_INFO_ERROR = 'testInfo/fetchTestsInfo_ERROR',

    FETCH_TESTS_DATA_STARTED = 'testData/fetchTestsData_STARTED',
    FETCH_TESTS_DATA_DONE = 'testData/fetchTestsData_DONE',
    FETCH_TESTS_DATA_ERROR = 'testData/fetchTestsData_ERROR',

    SET_TEST_RESULT_STARTED = 'testResult/setTestResult_STARTED',
    SET_TEST_RESULT_DONE = 'testResult/setTestResult_DONE',
    SET_TEST_RESULT_ERROR = 'testResult/setTestResult_ERROR',

    SET_TEST_RESULT_SHORT_INFO_STARTED = 'testResultShortInfo/setTestResultShortInfo_STARTED',
    SET_TEST_RESULT_SHORT_INFO_DONE = 'testResultShortInfo/setTestResultShortInfo_DONE',
    SET_TEST_RESULT_SHORT_INFO_ERROR = 'testResultShortInfo/setTestResultShortInfo_ERROR',

    FETCH_TEST_RESULT_SHORT_INFO_STARTED = 'testResultShortInfo/fetchTestResultShortInfo_STARTED',
    FETCH_TEST_RESULT_SHORT_INFO_DONE = 'testResultShortInfo/fetchTestResultShortInfo_DONE',
    FETCH_TEST_RESULT_SHORT_INFO_ERROR = 'testResultShortInfo/fetchTestResultShortInfo_ERROR',

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
