import React, { useState, useEffect } from "react";
import SectorSelect from "./SectorSelect";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    selectedSectors: [],
    agreeToTerms: false,
  });

  const [storedData, setStoredData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const retrievedData = localStorage.getItem("userData");
    if (retrievedData) {
      setStoredData(JSON.parse(retrievedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(formData));
  }, [formData]);

  const handleSectorsChange = (selectedSectors) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedSectors: selectedSectors,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      formData.selectedSectors.length === 0 ||
      !formData.agreeToTerms
    ) {
      alert("Please fill in all fields and agree to terms.");
      return;
    }

    alert("Data saved successfully!");
  };

  const handleToggleEdit = () => {
    setEditMode(!editMode);

    if (!editMode) {
      setFormData(storedData);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={!editMode}
          />
        </label>
        <label>
          <SectorSelect onSectorsChange={handleSectorsChange} />
        </label>
        <label>
          Agree to terms:
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
            disabled={!editMode}
          />
        </label>
        {!editMode && (
          <button type="button" onClick={handleToggleEdit}>
            Edit
          </button>
        )}
        {editMode && (
          <>
            <button type="submit">Save</button>
            <button type="button" onClick={handleToggleEdit}>
              Cancel
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
