import { Select, SelectItem } from "@nextui-org/react";

export default function HomeSection() {
  return (
    <div className="home-section">
      <h3>Choose WiFi</h3>
      <Select
        label="Favorite WiFi"
        placeholder="Select an animal"
        className="max-w-xs"
      >
       <SelectItem >dfbdfb</SelectItem>
       <SelectItem >dfbdfb</SelectItem>
       <SelectItem >dfbdfb</SelectItem>
       <SelectItem >dfbdfb</SelectItem>
      </Select>
    </div>
  )
}