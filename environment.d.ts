// declare in global space
declare global {
    // Js objects in the global namespace
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_BASE_URL: string;
            REACT_APP_AUTH_URL: string;
            REACT_APP_ENV: "local" | "dev" | "prod";

            // CI check
            SKIP_PREFLIGHT_CHECK: boolean;

            // 3rd party Integrations
            REACT_APP_GB_BASE_URL: "https://cdn.growthbook.io";
            REACT_APP_GB_API_KEY: string;
            REACT_APP_GB_SDK: string;
        }
    }
}
export {};
