# TEXMART – Smart Textile Management System
### Commercial Enterprise ERP & Handloom / Powerloom Weaving Management

> **Enterprise Partner**: Sree Poonguzhali Cotton Mills, Gangapuram, Chithode, Erode – 638 102  
> **GST IN**: `33ADSFS4275Q1Z3` | **CEO & MD**: C. Prabhu  
> **Academic Collaboration**: Kongu Engineering College (Autonomous), Perundurai, Erode – 638060  
> **Department**: Department of Computer Technology – PG (Master of Science in Software Systems)  
> **Faculty Supervisor**: Dr. T. Maragatham (Associate Professor, CT-PG)  
> **Project Team 18**:
> - Pranitha S G (`23ISR044`)
> - Shalini S R (`23ISR053`)
> - Varshasri K (`23ISR060`)

---

## 📖 Project Overview
**TexMart** is an integrated, web-based Smart Textile Management System developed to modernize operations at **Sree Poonguzhali Cotton Mills**, a premier textile industry in Tamil Nadu's Erode weaving belt. The platform connects raw material procurement, powerloom inventory monitoring, computerized ASTM D5430 inspection, and transparent B2B GST billing.

---

## 🚀 Key Modules (Slides 5–10 & Report Chapter 3.3)

### 1. Admin Panel Module
- Secure administrator authentication and multi-role access (Super Admin, Store Manager, Loom Auditor).
- Live KPI Dashboard tracking Active Fabric SKUs, Stock on Looms (meters), Low Stock Warnings, and Wholesale Order Pipeline.
- Complete fabric SKU registration and management engine.

### 2. Supplier & Purchase Module
- Supplier directory managing ginners, silk reelers, and dye houses across Kongu cotton belt.
- Purchase Order (PO) creation for raw yarn cones, mulberry silk bales, and flax yarn.
- Purchase history tracking, invoice reconciliation, and payment status tracking.

### 3. Stock Management Module
- Real-time meter-level inventory auditing with live `±10m` stock adjustment controls.
- Visual low stock warning triggers (<25 meters threshold).
- Full inventory reporting with instant **CSV Export**.

### 4. Product Display & Catalog Module
- Dynamic fabric catalog with category filters (Pure Silk, Organic Cotton, Flax Linen, Banarasi Brocade, Heavy Denim).
- Interactive live search by weave, yarn type, or fabric name.
- Real-time stock status badges (`In Stock (XX m)` / `Low Stock (XX m)`).
- Detailed **Quick View Modal** featuring technical GSM, weave type, roll width, and wash care.

### 5. About Us (Licenses & Quality Assurance Module)
- Statutory mill certifications:
  - **GOTS Organic Standard** (`Lic. No: GOTS-IN-2024-884`)
  - **ISO 9001:2015 QMS** (`Cert. No: ISO-QMS-4412/ERD`)
  - **Ministry of Textiles Reg.** (`Reg. No: TN/ERD/TXM-4921/2004`)
  - **TNPCB Zero Liquid Discharge** (`ZLD Consent No: TNPCB/ZLD-2023-77`)
  - **Silk Mark Authorised User** (`SMOI-SZ-9021`)
- Physical laboratory standards: **ASTM D5430 4-Point System**, **ISO 13934-1 Tensile Testing**, **ISO 105-C06 Color Fastness**, and Combed Yarn Count Calibration.

---

## 🗄️ Database Design (Tables 3.1 to 3.7)
1. **Table 3.1: Admin Details** (`Admin_id`, `Password`)
2. **Table 3.2: Customer Details** (`Customer_id`, `Customer_Name`, `Customer_Password`, `Customer_Email`)
3. **Table 3.3: Product Details** (`Product_id`, `Product_Name`, `Product_Description`, `Product_Price`, `Product_Image`, `Category_Id`, `Product_Brand`)
4. **Table 3.4: Category Details** (`Category_id`, `Category_Name`)
5. **Table 3.5: Product Purchase Details** (`Purchase_id`, `Customer_id`, `Product_id`, `Purchase_Date`, `Shipping_Address`, `Amount`, `Receipt_Number`)
6. **Table 3.6: Payment Details** (`Payment_id`, `Customer_id`, `Purchase_id`, `Purchase_Date`, `Amount`, `Receipt_Number`)
7. **Table 3.7: Customer Feedback** (`Customer_id`, `Product_id`, `Feedback_Description`, `Feedback_Rating`)

---

## 🌍 UN Sustainable Development Goals (SDG Alignment)
- **SDG 8**: Decent Work and Economic Growth
- **SDG 9**: Industry, Innovation and Infrastructure
- **SDG 16**: Peace, Justice and Strong Institutions

---

## 💻 Tech Stack
- **Frontend**: HTML5, Vanilla CSS3, JavaScript (ES6+), Font Awesome 6.4
- **Storage & State**: Client-side Reactive State & JSON Stores
- **Design System**: Responsive CSS Grid/Flexbox, Dark Mode theme, Glassmorphism modals
