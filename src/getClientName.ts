import { CLIENT_NAMES, CLIENT_NAME_EXCEPTIONS_MAP } from "./config";

// Returns v3 client name for the provided v2 client name.
export const getClientName = (clientName: string) => {
  if (clientName in CLIENT_NAME_EXCEPTIONS_MAP)
    return CLIENT_NAME_EXCEPTIONS_MAP[clientName];
  if (CLIENT_NAMES.includes(clientName)) return clientName;
  throw new Error(
    `Client '${clientName}' is either deprecated or newly added.`
  );
};
