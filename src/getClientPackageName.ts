import { CLIENT_PACKAGE_NAMES_MAP } from "./config";

// Returns v3 client name for the provided v2 client name.
export const getClientPackageName = (clientName: string) => {
  if (clientName in CLIENT_PACKAGE_NAMES_MAP)
    return CLIENT_PACKAGE_NAMES_MAP[clientName];
  throw new Error(
    `Client '${clientName}' is either deprecated or newly added.`
  );
};
