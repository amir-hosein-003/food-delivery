import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function OwnerLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger
        name="index"
        options={{
          title: "Order",
          icon: {
            sf: "shippingbox.fill",
            drawable: "ic_menu_view",
          },
        }}
      />

      <NativeTabs.Trigger
        name="menu"
        options={{
          title: "Menu",
          icon: {
            sf: "menucard.fill",
            drawable: "ic_menu",
          },
        }}
      />

      <NativeTabs.Trigger
        name="analytics"
        options={{
          title: "Analytics",
          icon: {
            sf: "chart.bar.xaxis",
            drawable: "ic_menu_sort_by_size",
          },
        }}
      />

      <NativeTabs.Trigger
        name="profile"
        options={{
          title: "Profile",
          icon: {
            sf: "person.crop.circle.fill",
            drawable: "ic_menu_myplaces",
          },
        }}
      />
    </NativeTabs>
  );
}
