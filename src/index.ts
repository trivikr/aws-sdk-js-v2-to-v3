import { API, FileInfo } from "jscodeshift";
import findImports from "jscodeshift-find-imports";

import { addV3ClientImport, getV2ClientNames } from "./helpers";
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

        addV3ClientImport(j, source, v3ClientName, v3PackageName);

        // Replace v2 client creation with v3 client creation.
        source
          .find(j.NewExpression, {
            callee: {
              object: { type: "Identifier", name: importObj.name },
              property: { type: "Identifier", name: v2ClientName },
            },
          })
          .replaceWith((nodePath) => {
            const { node } = nodePath;
            node.callee = j.identifier(v3ClientName);
            return node;
          });
      }
    }
  }

  return source.toSource();
}
