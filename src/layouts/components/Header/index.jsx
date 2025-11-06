import React from "react";
import { Link } from "react-router";
import { ArrowUpIcon, Search } from "lucide-react";
import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import Navigation from "../Navigation";
import images from "@/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  faMagnifyingGlass,
  faUserPen,
  faHeart,
  faBasketShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="md:container md:mx-auto">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="">
            <a href="/">
              <img
                src={images.logo1}
                alt="Nôi Việt"
                className=""
                style={{ width: "150px", height: "auto" }}
              />
            </a>
          </div>

          <div className="hidden w-[50%] lg:block">
            <InputGroup>
              <InputGroupInput placeholder="Tìm kiếm sản phẩm..." />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="flex gap-9">
            <div className="flex items-center space-x-2">
              <Label className="hidden lg:block">Đăng ký</Label>
              <FontAwesomeIcon icon={faUserPen} className="fs-3" />
            </div>
            <div className="flex items-center space-x-2">
              <Label className="hidden lg:block">Yêu thích</Label>
              <FontAwesomeIcon icon={faHeart} className="fs-3" />
            </div>
            <div className="flex items-center space-x-2">
              <Label className="hidden lg:block">Giỏ hàng</Label>
              <FontAwesomeIcon icon={faBasketShopping} className="fs-3" />
            </div>
            <div className="block lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-0 bg-transparent outline-0"
                  >
                    <FontAwesomeIcon icon={faBars} className="fs-3" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when
                      you&apos;re done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                      <Label htmlFor="sheet-demo-name">Name</Label>
                      <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="sheet-demo-username">Username</Label>
                      <Input
                        id="sheet-demo-username"
                        defaultValue="@peduarte"
                      />
                    </div>
                  </div>
                  <SheetFooter>
                    <Button type="submit">Save changes</Button>
                    <SheetClose asChild>
                      <Button variant="outline">Close</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        <div className="d-xl-block d-none">
          <Navigation />
        </div>
      </div>
      <div className=""></div>
    </header>
  );
}
export default Header;
