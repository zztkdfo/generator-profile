import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import rehypeRaw from "rehype-raw";

interface ContentProps {
  renderActiveSection: React.ReactNode;
  markdownPreview: string;
}

const Content: React.FC<ContentProps> = ({
  renderActiveSection,
  markdownPreview,
}) => {
  return (
    <div className="flex-1 p-4 md:p-7 overflow-auto">
      <div className="h-full">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* 왼쪽 영역 */}
          <div className="w-full lg:w-[600px] lg:min-w-[600px] bg-white rounded-lg shadow p-4">
            {renderActiveSection}
          </div>

          {/* 오른쪽 영역 */}
          <div className="w-full flex-1 bg-white rounded-lg shadow p-4 overflow-hidden">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                img: ({ src, alt, ...props }) => {
                  const cleanAlt = alt?.replace(/=\d+x\d+/, "").trim() || "";
                  const isShieldsBadge = src?.includes("img.shields.io");

                  return (
                    <Image
                      src={src || ""}
                      alt={cleanAlt}
                      width={parseInt(props.width as string) || 100}
                      height={
                        parseInt(props.height as string) ||
                        (isShieldsBadge ? 30 : 100)
                      }
                      style={{
                        display: isShieldsBadge ? "inline-block" : "inline",
                        verticalAlign: "middle",
                        maxWidth: "100%",
                        ...(isShieldsBadge
                          ? {
                              height: "30px",
                              maxHeight: "30px",
                            }
                          : {
                              height: "auto",
                            }),
                      }}
                      unoptimized
                    />
                  );
                },
                hr: () => <hr className="my-8 border-t border-gray-300" />,
                h1: ({ ...props }) => (
                  <h1 className="text-2xl font-bold mb-4" {...props} />
                ),
                p: ({ ...props }) => <p className="mb-4" {...props} />,
                h2: ({ ...props }) => (
                  <h2 className="text-xl font-bold mb-3" {...props} />
                ),
                ul: ({ ...props }) => (
                  <ul className="list-disc pl-5 mb-4" {...props} />
                ),
                li: ({ ...props }) => <li className="mb-2" {...props} />,
              }}
              className="prose prose-slate max-w-none break-words prose-img:my-0"
            >
              {markdownPreview}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
