import { CLIENT_NAMES_MAP } from "../config";
import { getClientName } from "../getClientName";

describe(getClientName.name, () => {
  it.each(Object.entries(CLIENT_NAMES_MAP))(
    "getClientName('%s') === '%s'",
    (input, output) => {
      expect(getClientName(input)).toBe(output);
    }
  );

  it.each(["ImportExport", "MobileAnalytics", "SimpleDB"])(
    "throws for deprecated client '%s'",
    deprecatedClient => {
      expect(() => {
        getClientName(deprecatedClient);
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
        getClientName(unknownClient);
      }).toThrow(
        new Error(
          `Client '${unknownClient}' is either deprecated or newly added.`
        )
      );
    }
  );
});
