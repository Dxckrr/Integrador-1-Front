import { Disclosure } from "@headlessui/react";
import UPARROW from "../../../assets/svg/icons/extra/UpArrow.svg"
import DOWNARROW from "../../../assets/svg/icons/extra/DownArrow.svg"
import SideBarButton from "./SideBarButton";

interface SideBarSubItem {
    name: string;
    href: string;
}
interface SideBarButtonProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    name: string;
    subItems?: SideBarSubItem[];
}
const SideBarButtonsDropDown: React.FC<SideBarButtonProps> = ({ Icon, name, subItems }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full font-normal text-base py-1 pl-2 my-2 rounded-md hover:bg-gray-100 items-center ">
            <div className="flex items-center">
              <Icon className="size-5"/>
              <span className="pl-3">{name}</span>
            </div>
            <div className="mr-2">
              {open ? <img className="size-4" src={UPARROW} alt={"abrir"} /> : <img className="size-4" src={DOWNARROW} alt={"cerrar"} />}
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="pl-4 pr-2">
            {subItems && subItems.map((item, i) => (
              <SideBarButton
                linkto={item.href} 
                name={item.name} 
                key={i}
              />
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default SideBarButtonsDropDown