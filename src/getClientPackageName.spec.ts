import { CLIENT_PACKAGE_NAMES_MAP } from "./config";
import { getClientPackageName } from "./getClientPackageName";

describe(getClientPackageName.name, () => {
  it.each(Object.entries(CLIENT_PACKAGE_NAMES_MAP))(
    "getClientName('%s') === '%s'",
    (input, output) => {
      expect(getClientPackageName(input)).toBe(output);
    }
  );

  it.each(["ImportExport", "MobileAnalytics", "SimpleDB"])(
    "throws for deprecated client '%s'",
    deprecatedClient => {
      expect(() => {
        getClientPackageName(deprecatedClient);
      }).toThrow(
        new Error(
          `Client '${deprecatedClient}' is either deprecated or newly added.`
        )
      );
    }
  );

  it.each(["UNDEFINED", "NULL", "UNKNOWN"])(
    "throws for unknown client '%s'",
    unknownClient => {
      expect(() => {
        getClientPackageName(unknownClient);
      }).toThrow(
        new Error(
          `Client '${unknownClient}' is either deprecated or newly added.`
        )
      );
    }
  );
});
