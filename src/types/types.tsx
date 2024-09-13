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
  title: string
  setTitle: any
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

export const configRequirements: Record<ComponentType, Partial<Record<ComponentType, string>>> = {
  cpu: {
    motherboard: "socket"
  },
  motherboard: {
    cpu: "socket",
    memory: "type",

  },
  video_card: {},
  power_supply: {},
  memory: {
    motherboard: "memoryType"
  },
  internal_hard_drive: {},
  case: {
    motherboard: "formFactor"
  },
  external_hard_drive: {},
  case_accessory: {},
  case_fan: {},
  cpu_cooler: {},
  fan_controller: {},
  headphones: {},
  keyboard: {},
  monitor: {},
  mouse: {},
  optical_drive: {},
  os: {},
  sound_card: {},
  speakers: {},
  thermal_paste: {},
  ups: {},
  webcam: {},
  wired_network_card: {},
  wireless_network_card: {},
};



export const componentSchemas: Record<ComponentType, ComponentSchema> = {
  case_accessory: {
    name: "Accessoire de Boîtier",
    metadata: [
      { key: "compatibility", label: "Compatibilité", type: "text" },
      { key: "material", label: "Matériau", type: "text" },
    ],
  },
  case_fan: {
    name: "Ventilateur de Boîtier",
    metadata: [
      { key: "size", label: "Taille (mm)", type: "number" },
      { key: "rpm", label: "Tours par minute (RPM)", type: "number" },
      { key: "airflow", label: "Flux d'air (CFM)", type: "number" },
    ],
  },
  case: {
    name: "Boîtier",
    metadata: [
      { key: "formFactor", label: "Format", type: "text" },
      { key: "material", label: "Matériau", type: "text" },
      { key: "numberOfBays", label: "Nombre de Baies", type: "number" },
    ],
  },
  cpu_cooler: {
    name: "Refroidisseur de CPU",
    metadata: [
      { key: "coolerType", label: "Type de Refroidisseur", type: "text" },
      { key: "fanSize", label: "Taille du Ventilateur (mm)", type: "number" },
      { key: "noiseLevel", label: "Niveau Sonore (dB)", type: "number" },
    ],
  },
  cpu: {
    name: "Processeur",
    metadata: [
      { key: "cores", label: "Cœurs", type: "number" },
      { key: "threads", label: "Threads", type: "number" },
      { key: "baseClock", label: "Fréquence de Base (GHz)", type: "number" },
      { key: "boostClock", label: "Fréquence Boost (GHz)", type: "number" },
      { key: "tdp", label: "TDP (W)", type: "number" },
      { key: "socket", label: "Socket", type: "text" },
    ],

  },
  external_hard_drive: {
    name: "Disque Dur Externe",
    metadata: [
      { key: "capacity", label: "Capacité (Go)", type: "number" },
      { key: "interface", label: "Interface", type: "text" },
    ],
  },
  internal_hard_drive: {
    name: "Disque Dur Interne",
    metadata: [
      { key: "capacity", label: "Capacité (Go)", type: "number" },
      { key: "interface", label: "Interface", type: "text" },
      { key: "formFactor", label: "Format", type: "text" },
      { key: "rpm", label: "Tours par minute (RPM)", type: "number" },
    ],
  },
  fan_controller: {
    name: "Contrôleur de Ventilateur",
    metadata: [
      { key: "channels", label: "Nombre de Canaux", type: "number" },
      { key: "controlType", label: "Type de Contrôle", type: "text" },
    ],
  },
  headphones: {
    name: "Casque Audio",
    metadata: [
      { key: "type", label: "Type", type: "text" },
      { key: "frequencyResponse", label: "Réponse en Fréquence (Hz)", type: "text" },
      { key: "impedance", label: "Impédance (Ohms)", type: "number" },
    ],
  },
  keyboard: {
    name: "Clavier",
    metadata: [
      { key: "switchType", label: "Type de Switch", type: "text" },
      { key: "layout", label: "Disposition", type: "text" },
      { key: "backlight", label: "Rétroéclairage", type: "text" },
    ],
  },
  memory: {
    name: "Mémoire",
    metadata: [
      { key: "capacity", label: "Capacité (Go)", type: "number" },
      { key: "speed", label: "Vitesse (MHz)", type: "number" },
      { key: "type", label: "Type", type: "text" },
    ],
  },
  monitor: {
    name: "Moniteur",
    metadata: [
      { key: "size", label: "Taille (pouces)", type: "number" },
      { key: "resolution", label: "Résolution", type: "text" },
      { key: "refreshRate", label: "Taux de Rafraîchissement (Hz)", type: "number" },
    ],
  },
  motherboard: {
    name: "Carte Mère",
    metadata: [
      { key: "formFactor", label: "Format", type: "text" },
      { key: "chipset", label: "Chipset", type: "text" },
      { key: "socket", label: "Socket", type: "text" },
      { key: "memoryType", label: "Type de mémoire", type: "text" },
    ],
  },
  mouse: {
    name: "Souris",
    metadata: [
      { key: "dpi", label: "DPI", type: "number" },
      { key: "sensorType", label: "Type de Capteur", type: "text" },
    ],
  },
  optical_drive: {
    name: "Lecteur Optique",
    metadata: [
      { key: "type", label: "Type", type: "text" },
      { key: "interface", label: "Interface", type: "text" },
    ],
  },
  os: {
    name: "Système d'Exploitation",
    metadata: [
      { key: "version", label: "Version", type: "text" },
      { key: "licenseType", label: "Type de Licence", type: "text" },
    ],
  },
  power_supply: {
    name: "Alimentation",
    metadata: [
      { key: "wattage", label: "Puissance (W)", type: "number" },
      { key: "efficiencyRating", label: "Indice d'Efficacité", type: "text" },
      { key: "modular", label: "Modulaire", type: "text" },
    ],
  },
  sound_card: {
    name: "Carte Son",
    metadata: [
      { key: "channels", label: "Nombre de Canaux", type: "number" },
      { key: "interface", label: "Interface", type: "text" },
    ],
  },
  speakers: {
    name: "Haut-parleurs",
    metadata: [
      { key: "type", label: "Type", type: "text" },
      { key: "frequencyResponse", label: "Réponse en Fréquence (Hz)", type: "text" },
      { key: "impedance", label: "Impédance (Ohms)", type: "number" },
    ],
  },
  thermal_paste: {
    name: "Pâte Thermique",
    metadata: [
      { key: "thermalConductivity", label: "Conductivité Thermique (W/mK)", type: "number" },
    ],
  },
  ups: {
    name: "Onduleur (UPS)",
    metadata: [
      { key: "capacity", label: "Capacité (VA)", type: "number" },
      { key: "batteryRuntime", label: "Autonomie de Batterie (min)", type: "number" },
    ],
  },
  video_card: {
    name: "Carte Graphique",
    metadata: [
      { key: "vram", label: "VRAM (Go)", type: "number" },
      { key: "cudaCores", label: "Cœurs CUDA", type: "number" },
      { key: "baseClock", label: "Fréquence de Base (MHz)", type: "number" },
      { key: "boostClock", label: "Fréquence Boost (MHz)", type: "number" },
    ],
  },
  webcam: {
    name: "Webcam",
    metadata: [
      { key: "resolution", label: "Résolution", type: "text" },
      { key: "frameRate", label: "Fréquence d'Images (FPS)", type: "number" },
    ],
  },
  wired_network_card: {
    name: "Carte Réseau Filaire",
    metadata: [
      { key: "speed", label: "Vitesse (Mbps)", type: "number" },
      { key: "interface", label: "Interface", type: "text" },
    ],
  },
  wireless_network_card: {
    name: "Carte Réseau Sans Fil",
    metadata: [
      { key: "speed", label: "Vitesse (Mbps)", type: "number" },
      { key: "wifiStandard", label: "Norme Wi-Fi", type: "text" },
    ],
  },
};
