export interface Product {
  id: string
  name: string
  manufacturer: string
  qCode: string
  sizes: string[]
  description: string
  category: string
}

export const categories = [
  "All Categories",
  "Amniotic",
  "Collagen",
  "Keratin",
]

export const manufacturers = [
  "All Manufacturers",
  "BioTissue Technologies",
  "Regenerative Sciences",
  "Integra LifeSciences",
  "Amnio Technology",
  "MiMedx Group",
  "Organogenesis",
  "Applied Biologics",
  "KeraNetics",
  "Coloplast",
]

export const products: Product[] = [
  {
    id: "1",
    name: "Amniotic Tri-Layer Allograft",
    manufacturer: "BioTissue Technologies",
    qCode: "Q4100",
    sizes: ["2x2", "2x3", "4x4", "4x6", "4x8"],
    description: "Triple layer amniotic allograft membrane designed to provide structural support and preserve native signals for advanced wound healing",
    category: "Amniotic",
  },
  {
    id: "2",
    name: "Single Layer Amnion Matrix",
    manufacturer: "Regenerative Sciences",
    qCode: "Q4168",
    sizes: ["2x2", "2x4", "4x4", "4x7"],
    description: "Single layer dehydrated human amniotic membrane that retains natural growth factors and anti-inflammatory properties",
    category: "Amniotic",
  },
  {
    id: "3",
    name: "Collagen Matrix Sheets",
    manufacturer: "Integra LifeSciences",
    qCode: "A6010",
    sizes: ["1.5x1.5", "2x2", "3x3", "4x4", "5x5", "6x7", "6x21"],
    description: "Type I acellular collagen scaffold that supports tissue regeneration and provides hemostatic properties",
    category: "Collagen",
  },
  {
    id: "4",
    name: "Hydrated Dual Layer Amnion",
    manufacturer: "Amnio Technology",
    qCode: "Q4221",
    sizes: ["2x2", "2x3", "4x4", "4x6", "4x8"],
    description: "Hydrated dual layer amniotic allograft that maintains moisture balance and cellular viability",
    category: "Amniotic",
  },
  {
    id: "5",
    name: "Dual Layer Amnion Graft",
    manufacturer: "MiMedx Group",
    qCode: "Q4175",
    sizes: ["2x2", "2x3", "4x4", "4x6", "4x8"],
    description: "Dual layer dehydrated amnion membrane for added structural support and enhanced healing outcomes",
    category: "Amniotic",
  },
  {
    id: "6",
    name: "Collagen Mini Grafts",
    manufacturer: "Organogenesis",
    qCode: "A6021",
    sizes: ["6 cm", "21 cm"],
    description: "Acellular collagen mini grafts for targeted applications in small wound areas",
    category: "Collagen",
  },
  {
    id: "7",
    name: "Dehydrated Amnion Membrane",
    manufacturer: "Applied Biologics",
    qCode: "Q4140",
    sizes: ["2x2", "2x3", "4x4", "4x6", "4x8"],
    description: "Preserves extracellular matrix and native biological properties while providing barrier protection",
    category: "Amniotic",
  },
  {
    id: "8",
    name: "Keratin Matrix",
    manufacturer: "KeraNetics",
    qCode: "A6196",
    sizes: ["2x3", "5x5", "10x10"],
    description: "Absorbable acellular keratin matrix that dissolves into the wound and supports natural regeneration processes",
    category: "Keratin",
  },
  {
    id: "9",
    name: "Fenestrated Collagen Matrix",
    manufacturer: "Coloplast",
    qCode: "A6024",
    sizes: ["3x3", "5x5"],
    description: "Fenestrated collagen matrix designed for optimal fluid management and tissue integration",
    category: "Collagen",
  },
]

export function getProductsByCategory(category: string): Product[] {
  if (category === "All Categories") {
    return products
  }
  return products.filter((p) => p.category === category)
}

export function getProductsByManufacturer(manufacturer: string): Product[] {
  if (manufacturer === "All Manufacturers") {
    return products
  }
  return products.filter((p) => p.manufacturer === manufacturer)
}

export function filterProducts(category: string, manufacturer: string): Product[] {
  let filtered = products

  if (category !== "All Categories") {
    filtered = filtered.filter((p) => p.category === category)
  }

  if (manufacturer !== "All Manufacturers") {
    filtered = filtered.filter((p) => p.manufacturer === manufacturer)
  }

  return filtered
}
