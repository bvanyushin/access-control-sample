
export type AccessLevel = "System" | "Agency" | "Advertiser"
export type Group = "Yahoo" | "Audi" | "Generic"
export type Role = "Editor" | "Viewer"

export interface User {
  role: Role;
  accessLevel: AccessLevel;
  group: Group;
}

export type Preset = 'systemEditor' | 'advertiserViewer';

export interface AccessConfig {
  preset?: Preset,
  exclusivelyForLevels?: AccessLevel[],
  restrictedForLevels?: AccessLevel[],
  exclusivelyForRoles?: Role[],
  restritedForRoles?: Role[],
  exclusivelyForGroups?: Group[],
  restrictedForGroups?: Group[],
}