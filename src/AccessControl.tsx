import React from "react";
import {
  Preset,
  User,
  AccessConfig
} from './types';
import { Visualiser } from './Visualiser';
interface Props {
  user: User
}

const checkConsistency: (config: AccessConfig) => void = (config) => {
  if (Object.values(config).every(value => !value)) {
    throw new Error("Define access rules")
  }
}

const getConfigFromPreset: (preset: Preset) => AccessConfig = (preset) => {
  if (preset === 'systemEditor') {
    return {
      exclusivelyForLevels: ['System'],
      restritedForRoles: ['Viewer']
    }
  }
  // advertiser viewer
  return {
    exclusivelyForLevels: ['Advertiser'],
    exclusivelyForRoles: ['Viewer']
  }
}

export const AccessControl: React.FC<Props> = ({user}) => {
  const checkAccess: (config: AccessConfig) => boolean = (baseConfig) => {
    checkConsistency(baseConfig)
    const config = baseConfig.preset ? getConfigFromPreset(baseConfig.preset) : baseConfig;

    if (config.exclusivelyForGroups && !config.exclusivelyForGroups.includes(user.group)) {
      return false
    }
    if (config.restrictedForGroups && config.restrictedForGroups.includes(user.group)) {
      return false
    }
    if (config.exclusivelyForRoles && !config.exclusivelyForRoles.includes(user.role)) {
      return false
    }
    if (config.restritedForRoles && config.restritedForRoles.includes(user.role)) {
      return false
    }
    if (config.exclusivelyForLevels && !config.exclusivelyForLevels.includes(user.accessLevel)) {
      return false
    }
    if (config.restrictedForLevels && config.restrictedForLevels.includes(user.accessLevel)) {
      return false
    }

    return true;
  }

  return <Visualiser checkAccess={checkAccess} />
}