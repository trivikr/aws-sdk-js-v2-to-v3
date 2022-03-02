import { API, FileInfo } from "jscodeshift";

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

  let a = 0;
  if ((a = 1)) {
    console.log("test");
  }
  // transform `root` here

  return root.toSource();
}
