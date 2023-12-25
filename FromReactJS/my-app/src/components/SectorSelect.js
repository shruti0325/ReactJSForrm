import React, { useState, useEffect } from "react";

const SectorSelect = ({ onSectorsChange }) => {
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    const fetchedSectors = [
      { id: 1, label: "Manufacturing", value: "manufacturing" },
      {
        id: 2,
        label: "Construction materials",
        value: "construction-materials",
      },
      {
        id: 3,
        label: "Electronics and Optics",
        value: "electronics-and-optics",
      },
      { id: 4, label: "Food and Beverage", value: "food-and-beverage" },
      {
        id: 5,
        label: "Bakery & confectionery products",
        value: "bakery-confectionery-products",
      },
      { id: 6, label: "Beverages", value: "beverages" },
      { id: 7, label: "Fish & fish products", value: "fish-and-fish-products" },
      { id: 8, label: "Meat & meat products", value: "meat-and-meat-products" },
      {
        id: 9,
        label: "Milk & dairy products",
        value: "milk-and-dairy-products",
      },
      { id: 10, label: "Other", value: "other" },
      { id: 11, label: "Sweets & snack food", value: "sweets-and-snack-food" },
    ];

    setSectors(fetchedSectors);
  }, []);

  useEffect(() => {
    if (typeof onSectorsChange === "function") {
      onSectorsChange(sectors);
    }
  }, [onSectorsChange, sectors]);

  return (
    <div>
      <label>Sectors:</label>
      <select>
        {sectors.map((sector) => (
          <option key={sector.id} value={sector.value}>
            {sector.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SectorSelect;
