import { BUILDING_TYPE } from "./types";

/**
 * Create one building
 * @param {buildingInfo}
 * @returns
 */
export const createBuilding = (buildingInfo: {
  name: string;
  type: BUILDING_TYPE;
  complex?: string;
  accessCode?: string;
}) => {
  // if no complex - create one
};

/**
 * Create multiple buildings
 */
