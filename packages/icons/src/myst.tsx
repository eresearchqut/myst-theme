import React from 'react';

export function MadeWithMyst({ url = 'https://www.qut.edu.au/' }: { url?: string }) {
  return (
    <a
      className="flex mx-auto text-gray-700 w-fit hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <QUTLogo width={20} />
      <span className="self-center ml-2 text-sm">Queensland University of Technology</span>
    </a>
  );
}

export interface LogoProps {
  width: number;
}

export const QUTLogo: React.FC<LogoProps> = ({ width }) => {
  return (
    <img
      src={
        'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTEzLjM5IDExMy4zOSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiNmZmY7fS5jbHMtM3tjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgpO30uY2xzLTR7ZmlsbDojMDAzYjcxO308L3N0eWxlPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTYuNjkgLTU2LjY3KSI+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSI1Ni42OSIgeT0iNTYuNjciIHdpZHRoPSIxMTMuMzkiIGhlaWdodD0iMTEzLjM5Ii8+PC9jbGlwUGF0aD48L2RlZnM+PHRpdGxlPlFVVF9TUVVBUkVfUkdCX1JFVjwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0yIiB3aWR0aD0iMTEzLjM5IiBoZWlnaHQ9IjExMy4zOSIvPjxnIGNsYXNzPSJjbHMtMyI+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTA2LjQxLDY4czAsMjkuMDUsMCwzMC4zN2MwLDIuMTQsMi42MiwxMiwxNi4xOCwxMnMxNS43My05LjgsMTUuNzMtMTEuODhWODFsLTEwLjQtMTAuODlWOTcuMjhjMCwuNTUsMCwzLjMxLTUuMzYsMy4zMS01LjYxLDAtNS42MS0yLjcyLTUuNjEtMy4zOFY2OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ni42OSAtNTYuNjcpIi8+PC9nPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSI3Mi4yOSAxMS4zIDgyLjIgMjEuNTYgODkuMzcgMjEuNTYgODkuMzcgNTIuOTggMTAwLjIgNTIuOTggMTAwLjIgMjEuNTYgMTA4LjU2IDIxLjU2IDEwOC41NiAxMS4yOSA3Mi4yOSAxMS4zIi8+PGcgY2xhc3M9ImNscy0zIj48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xMDAuOTMsMTAwLjdsOC44Niw5SDk3Ljg1TDc4LjM3LDg5LjQyaDExLjVsMy4wNywzLjE1YTkuNDQsOS40NCwwLDAsMCwuNzQtMy45NSwxMS4wNywxMS4wNywwLDEsMC0yMi4xMy4xNSwxMSwxMSwwLDAsMCwxMS4wNiwxMSw2LjI0LDYuMjQsMCwwLDAsMi0uMjJjLjEsMCw4LDguNTMsOCw4LjU3LTIuMjYsMS42MS02LjU5LDIuNDItMTAsMi40Mi0xMS44NiwwLTIxLjA5LTEwLjExLTIxLjA5LTIxLjYxYTIxLjQzLDIxLjQzLDAsMCwxLDQyLjg1LjQ0LDIyLjM1LDIyLjM1LDAsMCwxLTMuNDQsMTEuMzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ni42OSAtNTYuNjcpIi8+PC9nPjwvc3ZnPg=='
      }
      alt={'Queensland University of Technology'}
      width={width}
    />
  );
};
