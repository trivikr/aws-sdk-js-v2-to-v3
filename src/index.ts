import { API, FileInfo, NewExpression } from "jscodeshift";
import findImports from "jscodeshift-find-imports";

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const { statement } = j.template;
  const root = j(file.source);

  const imports = findImports(root, statement`import AWS from 'aws-sdk'`);
  for (const importObj of Object.values(imports)) {
    if (importObj.type === "Identifier") {
      const clientNames = root
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
    }
  }

  return root.toSource();
}
