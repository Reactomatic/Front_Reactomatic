export type PriceProvider = {
    provider: string;
    price: number;
};

export type Component = {
    id: string;
    name: string;
    price: number;
    description: string;
    pricesByProvider: PriceProvider[];
};

export type ComponentType = 'processeur' | 'carte mère' | 'carte graphique' | 'ram' | 'stockage' | 'boitié' | 'alimentation';

export type Config = {
    [key in ComponentType]?: Component;
};

export type ConfigContextType = {
    config: Config;
    setComponentSelection: (type: PCComponentType, component: Component | undefined) => void;
    getTotalPrice: () => number;
};

export type PCComponentType = 'processeur' | 'carte mère' | 'carte graphique' | 'ram' | 'stockage' | 'boitié' | 'alimentation';

export type Configuration = {
    id: string;
    name: string;
    price: number;
};

export type ComponentSchema = {
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
