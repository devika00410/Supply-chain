import React, { useState } from "react";
import "./MainForm.css";

export default function MainForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    extra: {}
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExtraChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      extra: { ...prev.extra, [name]: value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted! Check console for details.");
  };

  // Conditional fields for each service
  const renderServiceFields = () => {
    
    switch (formData.service) {
      case "smart-logistics":
        return (
          <>
            <label>Pickup Location</label>
            <input name="pickup" onChange={handleExtraChange} />

            <label>Delivery Location</label>
            <input name="delivery" onChange={handleExtraChange} />

            <label>Shipment Type</label>
            <select name="shipmentType" onChange={handleExtraChange}>
              <option value="">-- Select --</option>
              <option value="FTL">FTL</option>
              <option value="LTL">LTL</option>
              <option value="Container">Container</option>
            </select>

            <label>Estimated Weight / Volume</label>
            <input name="weight" onChange={handleExtraChange} />

            <label>Preferred Date</label>
            <input type="date" name="date" onChange={handleExtraChange} />

            {/* New Budget / Estimated Value */}
          </>
        );

      case "tracking":
        return (
          <>
            <label>Tracking ID / Reference Number</label>
            <input name="trackingId" onChange={handleExtraChange} />

            <label>Shipment Type</label>
            <select name="shipmentType" onChange={handleExtraChange}>
              <option value="">-- Select --</option>
              <option value="Domestic">Domestic</option>
              <option value="International">International</option>
              <option value="Container">Container</option>
            </select>

            <label>Current Location (optional)</label>
            <input name="currentLocation" onChange={handleExtraChange} />

          </>
        );

      // Other services remain unchanged
      case "docs":
        return (
          <>
            <label>Document Type</label>
            <select name="docType" onChange={handleExtraChange}>
              <option value="">-- Select --</option>
              <option value="eway">e-Way Bill</option>
              <option value="permit">Permit</option>
              <option value="pod">Proof of Delivery</option>
              <option value="invoice">Invoice</option>
            </select>

            <label>Upload Document</label>
            <input type="file" name="docFile" onChange={handleExtraChange} />

            <label>Notes / Instructions</label>
            <textarea name="notes" onChange={handleExtraChange}></textarea>
            
          </>
        );

      case "analytics":
        return (
          <>
            <label>Company / Organization Name</label>
            <input name="company" onChange={handleExtraChange} />

            <label>Services to Track</label>
            <div className="checkbox-group">
              <label><input type="checkbox" name="transport" onChange={handleExtraChange}/> Transport</label>
              <label><input type="checkbox" name="warehouse" onChange={handleExtraChange}/> Warehouse</label>
              <label><input type="checkbox" name="coldChain" onChange={handleExtraChange}/> Cold Chain</label>
            </div>

            <label>Duration / Period</label>
            <select name="duration" onChange={handleExtraChange}>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
            </select>
          </>
        );

      case "ai-route":
        return (
          <>
            <label>Number of Vehicles</label>
            <input type="number" name="vehicles" onChange={handleExtraChange} />

            <label>Service Region (City/State)</label>
            <input name="region" onChange={handleExtraChange} />

            <label>Delivery Frequency</label>
            <select name="frequency" onChange={handleExtraChange}>
              <option value="">-- Select --</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="custom">Custom</option>
            </select>

            <label>Type of Goods</label>
            <select name="goods" onChange={handleExtraChange}>
              <option value="">-- Select --</option>
              <option value="fmcg">FMCG</option>
              <option value="pharma">Pharma</option>
              <option value="industrial">Industrial</option>
            </select>
          </>
        );

      case "warehouse":
        return (
          <>
            <label>Warehouse Location(s)</label>
            <input name="warehouseLocation" onChange={handleExtraChange} />

            <label>Storage Type Needed</label>
            <select name="storageType" onChange={handleExtraChange}>
              <option value="">-- Select --</option>
              <option value="general">General</option>
              <option value="bonded">Bonded</option>
              <option value="hazardous">Hazardous</option>
            </select>

            <label>Inventory Type</label>
            <select name="inventoryType" onChange={handleExtraChange}>
              <option value="">-- Select --</option>
              <option value="raw">Raw Materials</option>
              <option value="finished">Finished Goods</option>
              <option value="perishables">Perishables</option>
            </select>

            <label>Storage Duration</label>
            <select name="duration" onChange={handleExtraChange}>
              <option value="">-- Select --</option>
              <option value="short">Short-term</option>
              <option value="long">Long-term</option>
            </select>
          </>
        );

      case "cold-chain":
        return (
          <>
            <label>Product Type</label>
            <select name="productType" onChange={handleExtraChange}>
              <option value="">-- Select --</option>
              <option value="dairy">Dairy</option>
              <option value="pharma">Pharma</option>
              <option value="seafood">Seafood</option>
              <option value="frozen">Frozen Foods</option>
            </select>

            <label>Temperature Range</label>
            <input name="temperature" onChange={handleExtraChange} />

            <label>Pickup & Delivery Locations</label>
            <input name="locations" onChange={handleExtraChange} />

            <label>Urgency</label>
            <select name="urgency" onChange={handleExtraChange}>
              <option value="express">Express</option>
              <option value="regular">Regular</option>
            </select>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="main-form">
      <h2>Service Request Form</h2>

      {/* Step 1 – Basic Info */}
      <label>Name</label>
      <input name="name" value={formData.name} onChange={handleChange} required />

      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Phone</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

      <label>Service Needed</label>
      <select name="service" value={formData.service} onChange={handleChange} required>
        <option value="">-- Select Service --</option>
        <option value="smart-logistics">Smart Logistics Marketplace</option>
        <option value="tracking">Real-Time Shipment Tracking</option>
        <option value="docs">Digital Documentation Hub</option>
        <option value="analytics">Performance Analytics Dashboard</option>
        <option value="ai-route">AI Route Optimization</option>
        <option value="warehouse">Smart Warehouse Management</option>
        <option value="cold-chain">Cold Chain Monitoring</option>
      </select>

      {/* Step 2 – Conditional Inputs */}
      {renderServiceFields()}

      {/* Step 3 – Submit */}
       {formData.service && (
    <>
      <label>Budget Range / Estimated Value</label>
      <input
        name="budget"
        placeholder="e.g., Rs.500 - Rs.2000"
        onChange={handleExtraChange}
      />
    </>
  )}

      <button type="submit">Submit</button>
    </form>
  );
}
