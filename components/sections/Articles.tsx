"use client";

import { useState, useCallback } from "react";
import { BsTrash } from "react-icons/bs";
import Button from "@/components/common/button/Button"; // Button 컴포넌트 import 추가

import { ArticlesDataType } from "@/types/types";

const ArticlesSection = ({
  onChange,
  initialData,
}: {
  onChange: (data: ArticlesDataType) => void;
  initialData: ArticlesDataType;
}) => {
  const [articles, setArticles] = useState(initialData.articles);
  const [mainBlogUrl, setMainBlogUrl] = useState(initialData.mainBlog || "");

  const handleArticleChange = useCallback(
    (index: number, field: "title" | "url", value: string) => {
      const updatedArticles = [...articles];
      updatedArticles[index] = {
        ...updatedArticles[index],
        [field]: value,
      };

      setArticles(updatedArticles);
      onChange({ articles: updatedArticles, mainBlog: mainBlogUrl });
    },
    [articles, mainBlogUrl, onChange]
  );

  const addArticle = useCallback(() => {
    const newArticle = {
      id: Date.now().toString(),
      title: "",
      url: "",
    };

    const updatedArticles = [...articles, newArticle];
    setArticles(updatedArticles);
    onChange({ articles: updatedArticles, mainBlog: mainBlogUrl });
  }, [articles, mainBlogUrl, onChange]);

  const removeArticle = useCallback(
    (index: number) => {
      if (
        articles[index].title.trim() === "" &&
        !window.confirm("제목이 비어있는 게시글을 삭제하시겠습니까?")
      ) {
        return;
      }

      const updatedArticles = articles.filter((_, i) => i !== index);
      setArticles(updatedArticles);
      onChange({ articles: updatedArticles, mainBlog: mainBlogUrl });
    },
    [articles, mainBlogUrl, onChange]
  );

  const handleMainBlogChange = useCallback(
    (url: string) => {
      const updatedData = {
        articles,
        mainBlog: url,
      };
      setMainBlogUrl(url);
      onChange(updatedData);
    },
    [articles, onChange]
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">게시글 섹션</h2>
      <div className="space-y-4">
        <div className="mb-4">
          <p className="text-sm mb-2 text-gray-600">
            현재 본인이 작성하고 있는 기술블로그, 뉴스, 포스트 등을
            작성해주세요.
          </p>

          <label className="block text-sm font-medium text-gray-700 mb-1">
            대표 블로그 URL
          </label>
          <input
            type="url"
            placeholder="https://example.com"
            className="w-full p-2 border rounded"
            value={mainBlogUrl}
            onChange={(e) => handleMainBlogChange(e.target.value)}
          />
        </div>

        {articles.map((article, index) => (
          <div key={article.id} className="p-4 border rounded-lg bg-gray-50">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-medium text-gray-700">
                게시글 #{index + 1}
              </span>
              <button
                onClick={() => removeArticle(index)}
                className="p-2 text-red-500 hover:text-red-600 transition rounded-full hover:bg-red-50"
                title="삭제"
              >
                <BsTrash className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  게시글 제목 *
                </label>
                <input
                  type="text"
                  placeholder="게시글의 제목을 입력해주세요"
                  className="w-full p-2 border rounded bg-white"
                  value={article.title}
                  onChange={(e) =>
                    handleArticleChange(index, "title", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL 주소 *
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/article"
                  className="w-full p-2 border rounded bg-white"
                  value={article.url}
                  onChange={(e) =>
                    handleArticleChange(index, "url", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        ))}

        <Button onClick={addArticle} className="w-full mt-4 px-4 py-2">
          게시글 추가
        </Button>
      </div>
    </div>
  );
};

export default ArticlesSection;
