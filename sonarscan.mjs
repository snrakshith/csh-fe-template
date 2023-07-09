import scanner from "sonarqube-scanner";
import pkg from "./package.json";

scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "sqp_2c591f6e457e8691a1e19e43cb17414382f5aefd",
        login: "admin",
        password: "finch_31",
        options: {
            "sonar.projectName": "csh-fe",
            "sonar.projectDescription": pkg.description,
            "sonar.projectKey": "csh-fe",
            "sonar.projectVersion": pkg.version,
            "sonar.sourceEncoding": "UTF-8",
            // "sonar.tests": "src/app/**/**__tests__",
            "sonar.test.inclusions": "*.test.tsx,*.test.ts",
            "sonar.exclusions": "**/__tests__/**",
            "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
            "sonar.typescript.tsconfigPath": "tsconfig.json",
        },
    },
    // eslint-disable-next-line no-undef
    () => process.exit()
);
