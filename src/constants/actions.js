import CribIcon from "@mui/icons-material/Crib";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";

const ACTIONS = [
  { title: "sleep", actionType: 1, Icon: CribIcon, color: "#60c1fc" },
  {
    title: "eat",
    actionType: 2,
    Icon: RestaurantIcon,
    color: "#33ff7d",
  },
  {
    title: "diaper",
    actionType: 3,
    Icon: BabyChangingStationIcon,
    color: "#ffff33",
  },
];

export { ACTIONS };
