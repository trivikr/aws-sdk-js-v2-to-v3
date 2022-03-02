import { API, FileInfo } from "jscodeshift";
import findImports from "jscodeshift-find-imports";

import { addV3ClientImport, getV2ClientNames, replaceClientCreation } from "./helpers";
import { getClientName, getClientPackageName } from "./utils";

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const { statement } = j.template;
  const source = j(file.source);

  const imports = findImports(source, statement`import AWS from 'aws-sdk'`);
  for (const importObj of Object.values(imports)) {
    if (importObj.type === "Identifier") {
      const v2ClientNames = getV2ClientNames(j, source, importObj);

      for (const v2ClientName of v2ClientNames) {
        const v3ClientName = getClientName(v2ClientName);
        const v3PackageName = getClientPackageName(v2ClientName);

        addV3ClientImport(j, source, { v3ClientName, v3PackageName });
        replaceClientCreation(j, source, { importObj, v2ClientName, v3ClientName });
      }
    }
  }

  return source.toSource();
}
