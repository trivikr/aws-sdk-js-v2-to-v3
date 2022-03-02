import { Collection, JSCodeshift } from "jscodeshift";

export const addV3ClientImport = (
  j: JSCodeshift,
  source: Collection<any>,
  v3ClientName: string,
  v3PackageName: string
): void => {
  source
    .find(j.ImportDeclaration)
    .filter((path) => path.value.source.value === "aws-sdk")
    .insertAfter(
      j.importDeclaration(
        [j.importSpecifier(j.identifier(v3ClientName))],
        j.stringLiteral(v3PackageName)
      )
    );
};
