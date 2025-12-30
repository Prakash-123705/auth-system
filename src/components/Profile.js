import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { apiUsers } = useAuth();
  const [selectedUser, setSelectedUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    if (apiUsers.length > 0) {
      setSelectedUser(apiUsers[0]);
      setEditData(apiUsers[0]);
    }
  }, [apiUsers]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setSelectedUser(editData);
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setEditData(selectedUser);
    setEditMode(false);
  };

  const handleInputChange = (e, field, parentField = null) => {
    const value = e.target.value;

    if (parentField) {
      setEditData({
        ...editData,
        [parentField]: {
          ...editData[parentField],
          [field]: value,
        },
      });
    } else {
      setEditData({
        ...editData,
        [field]: value,
      });
    }
  };

  const handleUserChange = (userId) => {
    const user = apiUsers.find((u) => u.id === userId);
    setSelectedUser(user);
    setEditData(user);
    setEditMode(false);
  };

  if (!selectedUser) {
    return <div className="profile-main"><p>Loading profile...</p></div>;
  }

  return (
    <div className="profile-main">
      <h2>User Profile</h2>

      {/* User Selector */}
      <div className="profile-selector">
        <label htmlFor="userSelect">Select User:</label>
        <select
          id="userSelect"
          value={selectedUser.id}
          onChange={(e) => handleUserChange(parseInt(e.target.value))}
          className="user-select"
        >
          {apiUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name} (ID: {user.id})
            </option>
          ))}
        </select>
      </div>

      {/* Profile Card */}
      <div className="profile-card">
        <h3>Profile Information</h3>

        <div className="profile-section">
          <div className="profile-item">
            <label>Name:</label>
            {editMode ? (
              <input
                type="text"
                value={editData.name || ""}
                onChange={(e) => handleInputChange(e, "name")}
                className="edit-input"
              />
            ) : (
              <p>{selectedUser.name}</p>
            )}
          </div>

          <div className="profile-item">
            <label>Email:</label>
            {editMode ? (
              <input
                type="email"
                value={editData.email || ""}
                onChange={(e) => handleInputChange(e, "email")}
                className="edit-input"
              />
            ) : (
              <p>{selectedUser.email}</p>
            )}
          </div>

          <div className="profile-item">
            <label>Phone:</label>
            {editMode ? (
              <input
                type="text"
                value={editData.phone || ""}
                onChange={(e) => handleInputChange(e, "phone")}
                className="edit-input"
              />
            ) : (
              <p>{selectedUser.phone}</p>
            )}
          </div>

          <div className="profile-item">
            <label>Website:</label>
            {editMode ? (
              <input
                type="text"
                value={editData.website || ""}
                onChange={(e) => handleInputChange(e, "website")}
                className="edit-input"
              />
            ) : (
              <p>{selectedUser.website}</p>
            )}
          </div>
        </div>

        {/* Company Information */}
        <div className="profile-subsection">
          <h4>Company Information</h4>
          <div className="profile-item">
            <label>Company Name:</label>
            {editMode ? (
              <input
                type="text"
                value={editData.company?.name || ""}
                onChange={(e) => handleInputChange(e, "name", "company")}
                className="edit-input"
              />
            ) : (
              <p>{selectedUser.company?.name}</p>
            )}
          </div>

          <div className="profile-item">
            <label>Company Catchphrase:</label>
            {editMode ? (
              <input
                type="text"
                value={editData.company?.catchPhrase || ""}
                onChange={(e) => handleInputChange(e, "catchPhrase", "company")}
                className="edit-input"
              />
            ) : (
              <p>{selectedUser.company?.catchPhrase}</p>
            )}
          </div>
        </div>

        {/* Address Information */}
        <div className="profile-subsection">
          <h4>Address Information</h4>
          <div className="profile-item">
            <label>Street:</label>
            {editMode ? (
              <input
                type="text"
                value={editData.address?.street || ""}
                onChange={(e) => handleInputChange(e, "street", "address")}
                className="edit-input"
              />
            ) : (
              <p>{selectedUser.address?.street}</p>
            )}
          </div>

          <div className="profile-item">
            <label>City:</label>
            {editMode ? (
              <input
                type="text"
                value={editData.address?.city || ""}
                onChange={(e) => handleInputChange(e, "city", "address")}
                className="edit-input"
              />
            ) : (
              <p>{selectedUser.address?.city}</p>
            )}
          </div>

          <div className="profile-item">
            <label>Zip Code:</label>
            {editMode ? (
              <input
                type="text"
                value={editData.address?.zipcode || ""}
                onChange={(e) => handleInputChange(e, "zipcode", "address")}
                className="edit-input"
              />
            ) : (
              <p>{selectedUser.address?.zipcode}</p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="profile-actions">
          {!editMode ? (
            <button onClick={handleEdit} className="btn-edit">
              ✏️ Edit Profile
            </button>
          ) : (
            <>
              <button onClick={handleSave} className="btn-save">
                ✓ Save Changes
              </button>
              <button onClick={handleCancel} className="btn-cancel">
                ✗ Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
