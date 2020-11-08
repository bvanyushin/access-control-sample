import React from 'react';
import './App.css';
import {
  AccessLevel,
  Group,
  Role,
  User,
} from './types';
import {AccessControl} from './AccessControl'
const startUser: User = {
  role: "Editor",
  accessLevel: "System",
  group: "Generic"
}

function App() {
  const [user, setUser] = React.useState<User>(startUser)
  return (
    <div className="App">
      <header>
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            minWidth: '300px'
          }}>
            <span>Current user</span>
            <div>Role: {user.role}</div>
            <div>Access Level: {user.accessLevel}</div>
            <div>Group: {user.group || 'No group'}</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: '50px'
            }}
          >
            <span>Set user</span>
            <div>
              <span>User Role</span>
              <input
                type="radio"
                name="role"
                value="Editor"
                onChange={value => setUser((user) => ({
                  ...user,
                  role: value.target.value as Role
                }))}
              /><span>Editor</span>
              <input
                type="radio"
                name="role"
                value="Viewer"
                onChange={value => setUser((user) => ({
                  ...user,
                  role: value.target.value as Role
                }))}
              /><span>Viewer</span>
            </div>

            <div>
              <span>Access Level</span>
              <input
                type="radio"
                name="level"
                value="System"
                onChange={value => setUser((user) => ({
                  ...user,
                  accessLevel: value.target.value as AccessLevel
                }))}
              /><span>System</span>
              <input
                type="radio"
                name="level"
                value="Agency"
                onChange={value => setUser((user) => ({
                  ...user,
                  accessLevel: value.target.value as AccessLevel
                }))}
              /> <span>Agency</span>
              <input
                type="radio"
                name="level"
                value="Advertiser"
                onChange={value => setUser((user) => ({
                  ...user,
                  accessLevel: value.target.value as AccessLevel
                }))}
              /> <span>Advertiser</span>
            </div>
            <div>
              <span>Group</span>
              <input
                type="radio"
                name="group"
                value="Generic"
                onChange={value => setUser((user) => ({
                  ...user,
                  group: value.target.value as Group
                }))}
              /><span>Generic</span>
              <input
                type="radio"
                name="group"
                value="Yahoo"
                onChange={value => setUser((user) => ({
                  ...user,
                  group: value.target.value as Group
                }))}
              /> <span>Yahoo</span>
              <input
                type="radio"
                name="group"
                value="Audi"
                onChange={value => setUser((user) => ({
                  ...user,
                  group: value.target.value as Group
                }))}
              /> <span>Audi</span>
            </div>
          </div>
        </div>
      </header>
      <AccessControl user={user}/>
    </div >
  );
}

export default App;
