import { v4 as uuid } from "uuid";

export const mapMainMenuItem = (menuItems) => {
  return menuItems.map((item) => ({
    id: uuid(),
    destination: item.menuItem.destination?.uri,
    label: item.menuItem.label,
    subMenuItems: (item.items || []).map((subItem) => ({
      id: uuid(),
      destination: subItem.destination?.uri,
      label: subItem.label,
    })),
  }));
};
