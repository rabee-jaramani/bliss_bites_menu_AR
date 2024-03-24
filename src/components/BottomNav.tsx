import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import RestaurantIcon from "@mui/icons-material/Restaurant";
export default function BottomNav({
  selectedFB_type,
  setSelectedFB_type,
  handleFB_Change,
  selectedCollection,
  setSelectedCollection,
  scrollTo,
}: any) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedFB_type(newValue);
    if (newValue === "طعام") {
      setSelectedCollection("فطور");
      scrollTo("collection", "فطور");
    }
    if (newValue === "المشروبات") {
      setSelectedCollection("المشروبات");
      scrollTo("collection", "المشروبات");
    }
    if (newValue === "حلويات") {
      setSelectedCollection("حلويات السعادة");
      scrollTo("collection", "حلويات السعادة");
    }
  };

  return (
    <div className="bottom-nav">
      <Tabs
        value={selectedFB_type}
        onChange={handleChange}
        aria-label="icon label tabs example"
      >
        <Tab
          icon={<RestaurantIcon fontSize="small" />}
          label="طعام"
          value="طعام"
        />
        <Tab
          icon={<LocalBarIcon fontSize="small" />}
          label="المشروبات"
          value="المشروبات"
        />
        <Tab
          icon={<CookieOutlinedIcon fontSize="small" />}
          label="حلويات"
          value="حلويات"
        />
        <Tab
          icon={<CloudOutlinedIcon fontSize="small" />}
          label="المطبخ السحابي"
          value="المطبخ السحابي"
        />
      </Tabs>
    </div>
  );
}
