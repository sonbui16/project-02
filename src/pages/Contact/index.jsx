import React, { useEffect } from "react";
import { Link } from "react-router";
// import avatar from "../../assets/images/img-avatar.png";
import styles from "./Contact.module.css";
import http from "../../utils/http";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import { getList as getProductList } from "@/services/product/productService";
import { selectProductList } from "@/features/product/productSlice";
import { useProductList, useFetchProductList } from "@/features/product";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useCounter } from "@/features/counter/hooks";
import { Input } from "@/components/ui/input";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

function Contact() {
  // getProductList();
  useFetchProductList();
  // console.log("sonbh123", sonbh);
  useProductList();
  // const couter1 = useCounter()
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default Contact;
