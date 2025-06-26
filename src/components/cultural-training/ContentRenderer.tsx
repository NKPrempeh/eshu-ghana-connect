
import React from "react";

interface ContentItem {
  type: "heading" | "text" | "list";
  content: string | string[];
}

interface ContentRendererProps {
  content: ContentItem[];
}

export const ContentRenderer = ({ content }: ContentRendererProps) => {
  return (
    <div className="space-y-6">
      {content.map((item, index) => {
        switch (item.type) {
          case "heading":
            return (
              <h3 key={index} className="text-xl font-semibold mb-4 text-gray-900">
                {item.content as string}
              </h3>
            );
          
          case "text":
            return (
              <p key={index} className="text-gray-700 leading-relaxed">
                {item.content as string}
              </p>
            );
          
          case "list":
            return (
              <ul key={index} className="space-y-2">
                {(item.content as string[]).map((listItem, listIndex) => (
                  <li key={listIndex} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{listItem}</span>
                  </li>
                ))}
              </ul>
            );
          
          default:
            return null;
        }
      })}
    </div>
  );
};
