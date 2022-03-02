import { API, FileInfo, NewExpression } from "jscodeshift";
import findImports from "jscodeshift-find-imports";
import { getClientName } from "./getClientName";
import { getClientPackageName } from "./getClientPackageName";

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const { statement } = j.template;
  const root = j(file.source);

  const imports = findImports(root, statement`import AWS from 'aws-sdk'`);
  for (const importObj of Object.values(imports)) {
    if (importObj.type === "Identifier") {
      const v2ClientNames = root
        .find(j.NewExpression, {
          callee: {
            object: { type: "Identifier", name: importObj.name },
            property: { type: "Identifier" }
          }
        })
        .nodes()
        .map(
          newExpression =>
            // @ts-ignore
            newExpression.callee.property.name
        );

      for (const v2ClientName of v2ClientNames) {
        const v3ClientName = getClientName(v2ClientName);
        const v3PackageName = getClientPackageName(v2ClientName);

        // Add v3 client import.
        root
          .find(j.ImportDeclaration)
          .filter(path => path.value.source.value === "aws-sdk")
          .insertAfter(
            j.importDeclaration(
              [j.importSpecifier(j.identifier(v3ClientName))],
              j.stringLiteral(v3PackageName)
            )
          );

        // Replace v2 client creation with v3 client creation.

        // Replace v2 client API calls with v3 client API calls.
      }
    }
  }

  return root.toSource();
}
