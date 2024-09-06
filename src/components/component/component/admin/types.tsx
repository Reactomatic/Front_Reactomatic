// TypeScript enum for ComponentType

export enum ComponentType {
  cpu = "cpu",
  motherboard = "motherboard",
  video_card = "video_card",
  power_supply = "power_supply",
  memory = "memory",
  internal_hard_drive = "internal_hard_drive",
  case = "case",
  external_hard_drive = "external_hard_drive",
  case_accessory = "case_accessory",
  case_fan = "case_fan",
  cpu_cooler = "cpu_cooler",
  fan_controller = "fan_controller",
  headphones = "headphones",
  keyboard = "keyboard",
  monitor = "monitor",
  mouse = "mouse",
  optical_drive = "optical_drive",
  os = "os",
  sound_card = "sound_card",
  speakers = "speakers",
  thermal_paste = "thermal_paste",
  ups = "ups",
  webcam = "webcam",
  wired_network_card = "wired_network_card",
  wireless_network_card = "wireless_network_card",
}

export const ComponentTypeDisplay: Record<ComponentType, string> = {
  case_accessory: "Accessoire de boîtier",
  case_fan: "Ventilateur de boîtier",
  case: "Boîtier",
  cpu_cooler: "Ventilateur de processeur",
  cpu: "Processeur",
  external_hard_drive: "Disque dur externe",
  internal_hard_drive: "Disque dur interne",
  fan_controller: "Contrôleur de ventilateur",
  headphones: "Casque",
  keyboard: "Clavier",
  memory: "Mémoire",
  monitor: "Moniteur",
  motherboard: "Carte mère",
  mouse: "Souris",
  optical_drive: "Lecteur optique",
  os: "Système d'exploitation",
  power_supply: "Alimentation",
  sound_card: "Carte son",
  speakers: "Haut-parleurs",
  thermal_paste: "Pâte thermique",
  ups: "Onduleur (UPS)",
  video_card: "Carte graphique",
  webcam: "Webcam",
  wired_network_card: "Carte réseau filaire",
  wireless_network_card: "Carte réseau sans fil",
};



export type ConfigContextType = {
  config: Config;
  setComponentSelection: (type: ComponentType, component: ComponentData | undefined) => void;
  getTotalPrice: () => number;
};

export type Config = {
  [key in ComponentType]?: ComponentData;
};

// Metadata type
export interface Metadata {
  key: string;
  value: any;
}

// PriceByRetailer type
export interface PriceByRetailer {
  retailer: string;
  price: number;
  url: string;
}

// Component data type
export interface ComponentData {
  id: number;
  category: ComponentType;
  name: string;
  price: number;
  brand: string;
  metadata?: Metadata[];
  priceByRetailer?: PriceByRetailer[];
}

// Define a schema for each component type
export interface ComponentSchema {
  name: string;
  metadata: { key: string; label: string; type: string }[];
}

export const componentSchemas: Record<ComponentType, ComponentSchema> = {
  case_accessory: {
    name: "Case Accessory",
    metadata: [
      { key: "compatibility", label: "Compatibility", type: "text" },
      { key: "material", label: "Material", type: "text" },
    ],
  },
  case_fan: {
    name: "Case Fan",
    metadata: [
      { key: "size", label: "Size (mm)", type: "number" },
      { key: "rpm", label: "RPM", type: "number" },
      { key: "airflow", label: "Airflow (CFM)", type: "number" },
    ],
  },
  case: {
    name: "Case",
    metadata: [
      { key: "formFactor", label: "Form Factor", type: "text" },
      { key: "material", label: "Material", type: "text" },
      { key: "numberOfBays", label: "Number of Bays", type: "number" },
    ],
  },
  cpu_cooler: {
    name: "CPU Cooler",
    metadata: [
      { key: "coolerType", label: "Cooler Type", type: "text" },
      { key: "fanSize", label: "Fan Size (mm)", type: "number" },
      { key: "noiseLevel", label: "Noise Level (dB)", type: "number" },
    ],
  },
  cpu: {
    name: "CPU",
    metadata: [
      { key: "cores", label: "Cores", type: "number" },
      { key: "threads", label: "Threads", type: "number" },
      { key: "baseClock", label: "Base Clock (GHz)", type: "number" },
      { key: "boostClock", label: "Boost Clock (GHz)", type: "number" },
      { key: "tdp", label: "TDP (W)", type: "number" },
    ],
  },
  external_hard_drive: {
    name: "External Hard Drive",
    metadata: [
      { key: "capacity", label: "Capacity (GB)", type: "number" },
      { key: "interface", label: "Interface", type: "text" },
    ],
  },
  internal_hard_drive: {
    name: "Internal Hard Drive",
    metadata: [
      { key: "capacity", label: "Capacity (GB)", type: "number" },
      { key: "interface", label: "Interface", type: "text" },
      { key: "formFactor", label: "Form Factor", type: "text" },
      { key: "rpm", label: "RPM", type: "number" },
    ],
  },
  fan_controller: {
    name: "Fan Controller",
    metadata: [
      { key: "channels", label: "Number of Channels", type: "number" },
      { key: "controlType", label: "Control Type", type: "text" },
    ],
  },
  headphones: {
    name: "Headphones",
    metadata: [
      { key: "type", label: "Type", type: "text" },
      { key: "frequencyResponse", label: "Frequency Response (Hz)", type: "text" },
      { key: "impedance", label: "Impedance (Ohms)", type: "number" },
    ],
  },
  keyboard: {
    name: "Keyboard",
    metadata: [
      { key: "switchType", label: "Switch Type", type: "text" },
      { key: "layout", label: "Layout", type: "text" },
      { key: "backlight", label: "Backlight", type: "text" },
    ],
  },
  memory: {
    name: "Memory",
    metadata: [
      { key: "capacity", label: "Capacity (GB)", type: "number" },
      { key: "speed", label: "Speed (MHz)", type: "number" },
      { key: "type", label: "Type", type: "text" },
    ],
  },
  monitor: {
    name: "Monitor",
    metadata: [
      { key: "size", label: "Size (inches)", type: "number" },
      { key: "resolution", label: "Resolution", type: "text" },
      { key: "refreshRate", label: "Refresh Rate (Hz)", type: "number" },
    ],
  },
  motherboard: {
    name: "Motherboard",
    metadata: [
      { key: "formFactor", label: "Form Factor", type: "text" },
      { key: "chipset", label: "Chipset", type: "text" },
      { key: "socket", label: "Socket", type: "text" },
    ],
  },
  mouse: {
    name: "Mouse",
    metadata: [
      { key: "dpi", label: "DPI", type: "number" },
      { key: "sensorType", label: "Sensor Type", type: "text" },
    ],
  },
  optical_drive: {
    name: "Optical Drive",
    metadata: [
      { key: "type", label: "Type", type: "text" },
      { key: "interface", label: "Interface", type: "text" },
    ],
  },
  os: {
    name: "Operating System",
    metadata: [
      { key: "version", label: "Version", type: "text" },
      { key: "licenseType", label: "License Type", type: "text" },
    ],
  },
  power_supply: {
    name: "Power Supply",
    metadata: [
      { key: "wattage", label: "Wattage (W)", type: "number" },
      { key: "efficiencyRating", label: "Efficiency Rating", type: "text" },
      { key: "modular", label: "Modular", type: "text" },
    ],
  },
  sound_card: {
    name: "Sound Card",
    metadata: [
      { key: "channels", label: "Number of Channels", type: "number" },
      { key: "interface", label: "Interface", type: "text" },
    ],
  },
  speakers: {
    name: "Speakers",
    metadata: [
      { key: "type", label: "Type", type: "text" },
      { key: "frequencyResponse", label: "Frequency Response (Hz)", type: "text" },
      { key: "impedance", label: "Impedance (Ohms)", type: "number" },
    ],
  },
  thermal_paste: {
    name: "Thermal Paste",
    metadata: [
      { key: "thermalConductivity", label: "Thermal Conductivity (W/mK)", type: "number" },
    ],
  },
  ups: {
    name: "UPS",
    metadata: [
      { key: "capacity", label: "Capacity (VA)", type: "number" },
      { key: "batteryRuntime", label: "Battery Runtime (min)", type: "number" },
    ],
  },
  video_card: {
    name: "Video Card",
    metadata: [
      { key: "vram", label: "VRAM (GB)", type: "number" },
      { key: "cudaCores", label: "CUDA Cores", type: "number" },
      { key: "baseClock", label: "Base Clock (MHz)", type: "number" },
      { key: "boostClock", label: "Boost Clock (MHz)", type: "number" },
    ],
  },
  webcam: {
    name: "Webcam",
    metadata: [
      { key: "resolution", label: "Resolution", type: "text" },
      { key: "frameRate", label: "Frame Rate (FPS)", type: "number" },
    ],
  },
  wired_network_card: {
    name: "Wired Network Card",
    metadata: [
      { key: "speed", label: "Speed (Mbps)", type: "number" },
      { key: "interface", label: "Interface", type: "text" },
    ],
  },
  wireless_network_card: {
    name: "Wireless Network Card",
    metadata: [
      { key: "speed", label: "Speed (Mbps)", type: "number" },
      { key: "wifiStandard", label: "Wi-Fi Standard", type: "text" },
    ],
  },
};
