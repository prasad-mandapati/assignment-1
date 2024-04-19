import {
  bell,
  bookmark,
  email,
  facebook,
  google,
  insta,
  pinter,
  product,
  telegram,
  twitter,
  youtube,
} from "../../public/assets/images";
import explore from "../../public/assets/images/Explore.png";
import hobbies from "../../public/assets/images/Hobbies.png";

export const dropdown = [
  {
    icon: explore,
    text: "Explore",
    dropData: [
      "People - Community",
      "Places - Venues",
      "Programs - Events",
      "Products - Store",
      "Blogs",
    ],
  },
  {
    icon: hobbies,
    text: "Hobbies",
    dropData: [
      "People - Community",
      "Places - Venues",
      "Programs - Events",
      "Products - Store",
      "Blogs",
    ],
  },
];

export const icons = [
  {
    icon: bookmark,
  },
  {
    icon: bell,
  },
  {
    icon: product,
  },
];

export const footer_cols = [
  {
    head: "Hobbycue",
    pages: ["About Us", "Our Services", "Work with Us", "FAQ", "Us"],
  },
  {
    head: "How Do I",
    pages: [
      "Sign Up",
      "Add a Listing",
      "Claim Listing",
      "Post a Query",
      "Add a Blog Post",
      "Other Queries",
    ],
  },
  {
    head: "Quick Links",
    pages: ["Listings", "Blog Posts", "Shop / Store", "Community"],
  },
];

export const socialMedia = [
  {
    head: "Social Media",
    icons: [facebook, twitter, insta, pinter, google, youtube, telegram, email],
  },
];