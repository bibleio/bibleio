import type { CollectionEntry } from "astro:content";
import { ListItem, ListItemCollapsible } from "@bibleio/design";
import { useState } from "react";

type Item = CollectionEntry<"design">;

function findChildren(items: Item, parentSlug: string) {
  return items.filter((item: Item) => {
    return parentSlug === item.slug.split("/").slice(0, -1).join("/");
  });
}

function renderItems(
  items: Item,
  projectSlug: string,
  parentSlug: string,
  currentSlug: string,
  isSidebarOpen: boolean,
) {
  const children = findChildren(items, parentSlug).sort((a: Item, b: Item) => {
    const aOrder = a.data.order ?? 9999;
    const bOrder = b.data.order ?? 9999;

    return aOrder - bOrder;
  });

  return (
    <ul className={"flex flex-col"}>
      {children.map((item: Item) => {
        const isDescendant = currentSlug.startsWith(
          `/${projectSlug}/docs/${item.slug}`,
        );

        const isSelected = `/${projectSlug}/docs/${item.slug}` === currentSlug;
        const isOpen = isSelected || isDescendant;

        if (item.data.directory) {
          return (
            <li key={item.slug} className="w-full">
              <ListItemCollapsible
                text={item.data.title}
                defaultOpen={isOpen}
                selected={isSelected}
              >
                {renderItems(
                  items,
                  projectSlug,
                  item.slug,
                  currentSlug,
                  isSidebarOpen,
                )}
              </ListItemCollapsible>
            </li>
          );
        }
        if (item.data.section) {
          return (
            <>
              <li key={item.slug} className="flex h-36 w-full items-center">
                <p className="text-sub leading-none text-[#000]/60 dark:text-[#fff]/60">
                  {item.data.title}
                </p>
              </li>
              <li key={item.slug} className="w-full">
                {renderItems(
                  items,
                  projectSlug,
                  item.slug,
                  currentSlug,
                  isSidebarOpen,
                )}
              </li>
            </>
          );
        }
        return (
          <li key={item.slug} className="w-full">
            <a href={`/${projectSlug}/docs/${item.slug}`}>
              <ListItem
                selected={isSelected}
                className="w-full"
                text={item.data.title}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar({
  currentSlug,
  projectSlug,
  docs,
}: {
  currentSlug: string;
  projectSlug: string;
  docs: string[];
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className={"flex w-[18rem] flex-col"}>
      {renderItems(docs, projectSlug, "", currentSlug, isSidebarOpen)}
    </div>
  );
}
