import ReactListItem from "@/src/components/Menu/ReactListItem";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu";
import {
  getElement,
  getElementSimpleTextData,
  getElementStyledTextData,
  type DataFormat,
} from "@stoati/tools";

const Menu = ({ galleries }: { galleries: DataFormat[] }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/">Presentation</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Mes oeuvres</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {galleries.map((item, index) => {
                const titleElement = getElementSimpleTextData(
                  getElement(item, "main_SimpleText#bmb28m")
                );

                const descriptionElement = getElementStyledTextData(
                  getElement(item, "main_StyledText#6z8q45")
                );

                return (
                  <ReactListItem
                    key={`gallerie ${index}`}
                    title={titleElement["fr-FR"]}
                    href={"/galleries/" + index}
                  >
                    {descriptionElement["fr-FR"]}
                  </ReactListItem>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
