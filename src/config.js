export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "tard-notes-2"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://yepa569207.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_MZl26TN9h",
        APP_CLIENT_ID: "2ca6nvna13lt9uo86ghuakmmsr",
        IDENTITY_POOL_ID: "us-east-2:81c738e1-dc70-479a-b837-fdc0b19ce9a5",
    },
    STRIPE_KEY: "pk_test_KiH4QLMztihxz0VGCaWklpNM00tej1PLod"
};
