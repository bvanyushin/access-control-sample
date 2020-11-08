import React from 'react';
import './vis.css'
import { AccessConfig } from './types';

interface Props {
  checkAccess: (config: AccessConfig) => boolean
}

export const Visualiser: React.FC<Props> = ({ checkAccess }) => {
  checkAccess({ preset: 'systemEditor' })
  return <div className="table">
    <div className="row">
      <div className="cell">Role</div>
      <div className="cell">Should see only</div>

    </div>
    <div className="row">
      <div className="cell">System Editor</div>
      <div className="cell">{checkAccess({ preset: "systemEditor" }) ? 'I see' : ""}</div>
    </div>
    <div className="row">
      <div className="cell">Yahoo Editor</div>
      <div className="cell">{checkAccess({
        exclusivelyForGroups: ['Yahoo'],
        exclusivelyForRoles: ['Editor']
      }) ? 'I see' : ""}</div>
    </div>
    <div className="row">
      <div className="cell">Yahoo Advertiser Editor</div>
      <div className="cell">{checkAccess({
        exclusivelyForGroups: ['Yahoo'],
        exclusivelyForLevels: ['Advertiser'],
        exclusivelyForRoles: ['Editor']
      }) ? 'I see' : ""}</div>
    </div>
    <div className="row">
      <div className="cell">Editors of all Levels</div>
      <div className="cell">{checkAccess({
        exclusivelyForRoles: ['Editor']
      }) ? 'I see' : ""}</div>
    </div>
    <div className="row">
      <div className="cell">Editors of Yahoo and Audi</div>
      <div className="cell">{checkAccess({
        exclusivelyForGroups: ['Yahoo', 'Audi'],
        exclusivelyForRoles: ['Editor']
      }) ? 'I see' : ""}</div>
    </div>
  </div>
}
